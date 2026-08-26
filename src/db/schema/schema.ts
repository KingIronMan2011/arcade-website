import { defineRelations, sql } from "drizzle-orm";
import {
  index,
  integer,
  jsonb,
  pgEnum,
  pgTable,
  primaryKey,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

import { user } from "./auth-schema";

export const gameIdEnum = pgEnum("game_id", ["snake", "tetris", "hacker"]);

export type GameId = (typeof gameIdEnum.enumValues)[number];

export const playerGameProgress = pgTable(
  "player_game_progress",
  {
    userId: text("user_id")
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    gameId: gameIdEnum("game_id").notNull(),
    highScore: integer("high_score").notNull().default(0),
    totalScore: integer("total_score").notNull().default(0),
    gamesPlayed: integer("games_played").notNull().default(0),
    state: jsonb("state")
      .$type<Record<string, unknown>>()
      .notNull()
      .default(sql`'{}'::jsonb`),
    createdAt: timestamp("created_at").defaultNow().notNull(),
    updatedAt: timestamp("updated_at")
      .defaultNow()
      .$onUpdate(() => new Date())
      .notNull(),
  },
  (table) => [
    primaryKey({
      columns: [table.userId, table.gameId],
      name: "player_game_progress_user_id_game_id_pk",
    }),
    index("player_game_progress_game_high_score_idx").on(
      table.gameId,
      table.highScore,
    ),
  ],
);

export const appRelations = defineRelations(
  { user, playerGameProgress },
  (r) => ({
    user: {
      gameProgress: r.many.playerGameProgress({
        from: r.user.id,
        to: r.playerGameProgress.userId,
      }),
    },
    playerGameProgress: {
      user: r.one.user({
        from: r.playerGameProgress.userId,
        to: r.user.id,
        optional: false,
      }),
    },
  }),
);
