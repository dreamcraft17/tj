import { NextResponse } from "next/server";
import { getFile } from "@/lib/careers/store";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const file = getFile(id);
  if (!file) return NextResponse.json({ success: false, error: "File not found" }, { status: 404 });
  return new NextResponse(new Uint8Array(file.bytes), {
    headers: {
      "Content-Type": file.contentType,
      "Content-Disposition": `attachment; filename="${file.filename}"`,
      "Cache-Control": "private, max-age=0",
    },
  });
}
