import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/db";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.email) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    // check if the user in the database
    const dbuser = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    if (!dbuser) {
      // create user in  db
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }
    return { success: true };
  }),
  // getUserFiles: privateProcedure.query(async ({ ctx }) => {
  //   const { userId } = ctx;

  //   return await db.file.findMany();
  // }),
});

export type AppRouter = typeof appRouter;
