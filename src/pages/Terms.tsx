import PageHeader from '../components/PageHeader'
import headerBg from '../assets/images/hermau_services_main_background.jpg'

export default function Terms() {
  return (
    <>
      <PageHeader title="Terms & Conditions" backgroundImage={headerBg} />

      <section className="py-14 px-4 bg-white">
        <div className="max-w-3xl mx-auto prose prose-gray text-gray-600 text-sm leading-relaxed space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Terms and Conditions</h2>
          <p>
            In using this website <strong>www.hermauservices.co.za</strong> you are deemed to have read and agreed
            to the following terms and conditions:
          </p>
          <p>
            The following terminology applies to these Terms and Conditions, Privacy Statement and any or all
            Agreements: "Client", "You" and "Your" refers to you, the person accessing this website and accepting
            the Company's terms and conditions. "The Company", "Ourselves", "We" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
            All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process
            of our assistance to the Client in the most appropriate manner.
          </p>
          <h3 className="text-base font-semibold text-gray-800 mt-6">Privacy Statement</h3>
          <p>
            We are committed to protecting your privacy. Authorised employees within the company on a need to know
            basis only use any information collected from individual customers. We constantly review our systems and
            data to ensure the best possible service to our customers.
          </p>
          <h3 className="text-base font-semibold text-gray-800 mt-6">Confidentiality</h3>
          <p>
            Client records are regarded as confidential and therefore will not be divulged to any third party, other
            than if legally required to do so to the appropriate authorities. Clients have the right to request sight
            of, and copies of any and all Client Records we keep, on the proviso that we are given reasonable notice
            of such a request.
          </p>
          <h3 className="text-base font-semibold text-gray-800 mt-6">Disclaimer</h3>
          <p>
            Exclusions and Limitations: The information on this web site is provided on an "as is" basis. To the
            fullest extent permitted by law, this Company excludes all representations, warranties and conditions
            relating to our website and the use of this website.
          </p>
          <h3 className="text-base font-semibold text-gray-800 mt-6">Copyright Notice</h3>
          <p>
            &copy; {new Date().getFullYear()} Hermau Services. All rights reserved. Reproduction is prohibited other
            than in accordance with the copyright notice, which forms part of these terms and conditions.
          </p>
        </div>
      </section>
    </>
  )
}
