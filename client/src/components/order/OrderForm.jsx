import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "../ui/Button";

const services = [
  "AI Ranking",
  "AEO & GEO",
  "GEO Audit",
  "AI Link Building",
  "LLM Visibility",
  "Brand Mentions",
  "Brand Prompt Research",
  "LinkedIn Listicles",
  "Fan-Out Queries",
  "Local GBP Ranking",
];

const packages = [
  "Starter",
  "Professional",
  "Enterprise",
  "Custom",
];

const meetingTimes = [
  "Morning",
  "Afternoon",
  "Evening",
  "Night",
];

const OrderForm = () => {
  const [searchParams] = useSearchParams();

  const service = searchParams.get("service") || "";
  const packageName = searchParams.get("package") || "";

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    country: "",
    service,
    package: packageName,
    meetingDate: "",
    meetingTime: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/send-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      alert(
        "✅ Thank you! Your request has been submitted successfully. We'll contact you within 24 hours."
      );

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        website: "",
        country: "",
        service,
        package: packageName,
        meetingDate: "",
        meetingTime: "",
        message: "",
      });
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-3xl border bg-white p-10 shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="mb-2 block font-medium">
              Full Name *
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Smith"
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="ABC Agency"
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Email *
            </label>

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Phone / WhatsApp *
            </label>

            <input
              type="text"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="+8801XXXXXXXXX"
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Website
            </label>

            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="https://example.com"
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Country / Time Zone
            </label>

            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Bangladesh (GMT+6)"
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Service *
            </label>

            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            >
              <option value="">Select Service</option>

              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Package
            </label>

            <select
              name="package"
              value={formData.package}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            >
              <option value="">Select Package</option>

              {packages.map((pkg) => (
                <option key={pkg} value={pkg}>
                  {pkg}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Preferred Meeting Date
            </label>

            <input
              type="date"
              name="meetingDate"
              value={formData.meetingDate}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="mb-2 block font-medium">
              Preferred Meeting Time
            </label>

            <select
              name="meetingTime"
              value={formData.meetingTime}
              onChange={handleChange}
              className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
            >
              <option value="">Select Time</option>

              {meetingTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Project Details *
          </label>

          <textarea
            rows={7}
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project, goals, competitors, and what you'd like to achieve..."
            className="w-full rounded-xl border p-4 outline-none focus:border-cyan-500"
          />
        </div>

        <div className="rounded-xl bg-slate-50 p-5">
          <p className="text-sm text-slate-600">
            🔒 Your information is private and will only be used to contact
            you regarding your project. We never share your information with
            third parties.
          </p>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-4 text-lg"
        >
          {loading ? "Submitting..." : "Book My Project"}
        </Button>
      </form>
    </div>
  );
};

export default OrderForm;