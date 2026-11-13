type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

const SectionHeading = ({ title, subtitle, align = "center" }: SectionHeadingProps) => {
  const alignment = align === "center" ? "sm:text-center sm:mx-auto" : "text-left";

  return (
    <div className={`mb-8 sm:mb-12 px-5 ${alignment} max-w-[760px]`}>
      <h2 className="poppins-font font-bold text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
