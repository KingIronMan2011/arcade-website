CREATE TYPE "game_id" AS ENUM('snake', 'tetris', 'hacker');--> statement-breakpoint
CREATE TABLE "player_game_progress" (
	"user_id" text,
	"game_id" "game_id",
	"high_score" integer DEFAULT 0 NOT NULL,
	"total_score" integer DEFAULT 0 NOT NULL,
	"games_played" integer DEFAULT 0 NOT NULL,
	"state" jsonb DEFAULT '{}' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "player_game_progress_user_id_game_id_pk" PRIMARY KEY("user_id","game_id")
);
--> statement-breakpoint
CREATE INDEX "player_game_progress_game_high_score_idx" ON "player_game_progress" ("game_id","high_score");--> statement-breakpoint
ALTER TABLE "player_game_progress" ADD CONSTRAINT "player_game_progress_user_id_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE;