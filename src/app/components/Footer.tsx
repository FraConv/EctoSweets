export default function Footer() {
  return (
    <footer className="w-full bg-[#242D38] text-white px-6 py-6 md:px-16">
      <div className="flex flex-col md:flex-row md:justify-between gap-6">

        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="text-sm md:text-base">
            Copyright © 2026 EctoSweets
          </p>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
            <p className="cursor-pointer hover:underline">Cookie Policy</p>
            <p className="cursor-pointer hover:underline">Privacy Policy</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center md:text-left">
          <p className="font-bold">Social</p>

          <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
            <p className="cursor-pointer hover:underline">Instagram</p>
            <p className="cursor-pointer hover:underline">TikTok</p>
          </div>
        </div>

      </div>
    </footer>
  );
}