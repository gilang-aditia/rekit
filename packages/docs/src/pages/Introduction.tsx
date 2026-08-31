export default function Introduction() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="scroll-m-24 text-3xl font-semibold tracking-tight">Introduction</h1>
        <p className="text-balance text-[1.05rem] text-muted-foreground sm:text-base">
          Re-usable components built using Radix UI and Tailwind CSS.
        </p>
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground">
          This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.
        </p>
        <p className="text-muted-foreground">
          <strong>What do you mean by not a component library?</strong><br />
          I mean you do not install it as a dependency. It is not available or distributed via npm.
        </p>
      </div>
    </>
  );
}
