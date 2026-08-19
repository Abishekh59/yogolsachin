-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
    "purchaseLink" TEXT NOT NULL DEFAULT '',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "isBestSeller" INTEGER DEFAULT 0
);
