import { getDMMF } from "@prisma/sdk";

const datamodel = `
model User {
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  email String @unique
  name String?
  role Role @default(USER)
  posts Post[]
}

model Post {
  id Int @id @default(autoincrement())
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  published Boolean @default(false)
  title String @db.VarChar(255)
  author User? @relation(fields: [authorId], references: [id])
  authorId Int?
}

enum Role {
  USER
  ADMIN
}
`;

export default async function (req, res) {
  try {
    const dmmf = await getDMMF({ datamodel });
    res.json(dmmf.datamodel);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.message, stack: e.stack });
  }
}
