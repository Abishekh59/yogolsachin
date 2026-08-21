-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "layoutDesigner" TEXT NOT NULL,
    "collaboratorArtist" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "coverImageUrl" TEXT NOT NULL,
    "publication" TEXT NOT NULL,
    "hasSpotUV" BOOLEAN NOT NULL DEFAULT false,
    "hasMatteLamination" BOOLEAN NOT NULL DEFAULT false,
    "hasFoilEmboss" BOOLEAN NOT NULL DEFAULT false,
    "isBestSeller" BOOLEAN NOT NULL DEFAULT false,
    "isAwardWinner" BOOLEAN NOT NULL DEFAULT false,
    "awardName" TEXT NOT NULL DEFAULT '',
    "purchaseLink" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);
