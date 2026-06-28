import Button from "../ui/Button";
import Input from "../ui/Input";

const AuditForm = () => {
  return (
    <div className="overflow-hidden rounded-2xl border bg-white shadow-xl">

      <div className="bg-[#111827] py-5 text-center text-lg font-semibold text-white">

        Get Your Free AI Visibility Report

      </div>

      <div className="space-y-6 p-8">

        <Input
          label="Work Email"
          placeholder="you@company.com"
        />

        <Input
          label="Website"
          placeholder="example.com"
        />

        <Input
          label="Competitor Website"
          placeholder="competitor.com"
        />

        <Button>
          Show My AI Visibility Score →
        </Button>

      </div>

    </div>
  );
};

export default AuditForm;