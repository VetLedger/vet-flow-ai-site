import { VetLedgerLogo } from "@/components/VetLedgerLogo";

export const Footer = () => {
  return (
    <footer className="bg-dark-slate text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <VetLedgerLogo className="w-10 h-10 text-white" />
            <span className="text-sm text-white/80">
              © {new Date().getFullYear()} VetLedger. All rights reserved.
            </span>
          </div>

          <div className="flex gap-6">
            <a 
              href="#privacy" 
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a 
              href="#terms" 
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
