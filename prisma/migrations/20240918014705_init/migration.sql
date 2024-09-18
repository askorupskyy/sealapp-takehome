-- CreateTable
CREATE TABLE "contest" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "deadline" TIMESTAMP(3) NOT NULL,
    "author" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contest_choice_option" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contest_id" TEXT NOT NULL,

    CONSTRAINT "contest_choice_option_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contest_position" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "choice_id" INTEGER NOT NULL,

    CONSTRAINT "contest_position_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "contest_choice_option" ADD CONSTRAINT "contest_choice_option_contest_id_fkey" FOREIGN KEY ("contest_id") REFERENCES "contest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "contest_position" ADD CONSTRAINT "contest_position_choice_id_fkey" FOREIGN KEY ("choice_id") REFERENCES "contest_choice_option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
