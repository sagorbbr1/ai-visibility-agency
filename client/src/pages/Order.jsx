import Container from "../components/ui/Container";
import OrderForm from "../components/order/OrderForm";

const Order = () => {
  return (
    <div className="bg-slate-50 py-24 min-h-screen">

      <Container>

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700">

            AI VISIBILITY AGENCY

          </span>

          <h1 className="mt-8 text-5xl font-black">

            Book Your

            <span className="text-cyan-600">

              Project

            </span>

          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-8">

            Tell us about your business and we'll contact you within
            24 hours with the next steps.

          </p>

        </div>

        <OrderForm />

      </Container>

    </div>
  );
};

export default Order;