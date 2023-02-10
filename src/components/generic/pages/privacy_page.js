import Page_header from "../components/page_header";
import Page_sidebar from "../components/page_sidebar";
import Assistance from "../components/assistance";
import Steps from '../components/steps';
import {Refine_message} from "../images/refine-message.svg"
import Marketing_steps_list from "../components/marketing_steps_list";
import Footer from "../../footer"
import Header from "../../header"
import Logo from "../../icons/footer-background-logo.svg"


function Privacy_page() {
  return (
    <section>
      < Header />
      <Page_header heading="Help Center" />
      <div className="">
        <div className="px-64">
          <p className="text-[1.6rem] font-normal tracking-[-0.24px] text-[#999] my-16">Home / <span className="text-body">Help Center</span> / Terms & Conditions</p>
          <div className="flex relative">
            <div className="w-[80%] flex flex-col pb-[100px]">
              <div className="flex flex-col">
                  <p className="text-[3.6rem] font-bold tracking-[-0.54px] text-black mb-12">Privacy Policy</p>
                  <div className="text-[2.2rem] font-normal tracking-[-0.55px] text-body leading-[3rem] flex flex-col gap-10">
                    <p className="font-semibold">1 Policy Statement</p>
                    <p> 1.1 Aid humanity is committed to protecting your personal data, whether you are a supporter of our cause, or a volunteer. In order to protect your data, please read this policy carefully. This will help you understand how we collect, use and store your personal data.</p>
                    <p> 1.2 Aid humanity is a registered UK charity; registration number 1184639 If you have any questions regarding this policy, please feel free to contact our Data Protection Officer at the following address:<br></br> Unit 9, Twelve o’clock Court, Sheffield, S4 7WW<br></br> Email: <span className="font-semibold text-primary">amar@aidhumanity.co.uk</span></p>
                    <p>1.3 In drafting this policy, we have taken into account the following legislation, including:<br></br> The Data Protection Act 1998<br></br> The Privacy and Electronic Communications (EC Directive) Regulations 2003 as amended by The Privacy and Electronic Communications (EC Directive) (Amendment) Regulations 2011 Directive 2009/136/EC of 25 November 2009 (“The European Union Cookie Directive”).</p>
                    <p className="font-semibold"> 2 Notification of change of privacy & cookie policy</p>
                    <p> 2.1 We reserve the right to amend this privacy statement at any time. You are advised to visit this website section periodically in order to keep up to date with any changes that may be made in our privacy policy.</p>
                    <p className="font-semibold"> 3 Consent</p>
                    <p> 3.1 By using our website, our social media pages (such as Facebook), subscribing to our services/notifications/marketing materials, donating to us and/or volunteering with us; you agree that we can place the types of cookies set out below on your device and use your data in accordance with this policy.</p>
                    <p> 3.2 In order to remember that you have accepted our use of cookies, we will place a temporary cookie to remember your consent for 3 months.</p>
                    <p className="font-semibold"> 4 Privacy Policy</p>
                    <p> 4.1 How do we collect information?</p>
                    <p> 4.1.1 We may collect information about you whenever you interact with us. For example, when you contact Aid Humanity regarding our events and activities, register as a donor or volunteer, send or receive information, engage with our social media or make a donation to us, you are specifically and knowingly providing our team with your personal information.</p>
                    <p> 4.1.2 In addition, we collect aggregated or anonymous information about the services you use and how you use them. For example, when you visit our website, view or marketing materials, respond to our adverts and interact with us via social media. We may also receive information about you from third parties – for example, where you’ve given them permission to share your information or where we gather information from publicly available sources which we discuss below.</p>
                    <p> 4.2 What information do we collect?</p>
                    <p> 4.2.1 We may collect names, addresses, email addresses, telephone numbers, bank account details for setting up a regular direct debit (if this is what you ask us to do) and, where appropriate, dates of birth whenever you interact with us. We do not use cookies to collect this type of information. All online financial transactions will be encrypted using SSL (Secure Sockets Layer).</p>
                    <p> 4.3 How do we use your information?</p>
                    <p> 4.3.1 We may use your information in a number of ways and for a number of purposes including:<br></br> To provide you with information or services that you have requested from us or that we feel may be of interest to you where you have consented to being contacted;<br></br> To provide you with information about our work or our activities where you have agreed to receive communications from us;<br></br> To invite you to participate in interactive features on our website; To process donations we may receive from you;<br></br> To fundraise in accordance with our internal policies and procedures;<br></br> For administrative purposes (for example, we may contact you regarding an event for which you have registered, to provide marketing information that you have requested from us or with address a query regarding a donation you may have made to us);<br></br> For internal record keeping relating to your donations, feedback or even complaints; To invite you to participate in voluntary surveys or research;<br></br> To contact you where you have been identified as a contact person for an organisation, such as a school (if we obtain your contact details in this way, we will only use them to contact you in your capacity as a representative of that organisation);<br></br> To analyse and improve our website;<br></br> To analyse the personal information we collect about you and use publicly available information to better understand your interests, preferences and level of potential donations so that we can contact you in the most appropriate way and to ensure that we do not send you unwanted communications;<br></br> To tailor advertising that is presented to you on the Internet according to your interests, preferences and other characteristics;<br></br> To direct advertisements and other communications to other people who may have similar interests or other characteristics to yours;<br></br> To assess your personal information for the purposes of credit risk and security or fraud prevention; and;<br></br> Where it is required or authorised by law.</p>
                    <p> 4.3.2 In particular, we may contact you for marketing purposes by email or text message if you have specifically provided us with your consent allowing us to contact you in this way. We may also send you acknowledgement communications via email or text, for example where you request services on our website, or you have made a donation by text.</p>
                    <p> 4.3.3 We may send you information about our work by direct mail or telephone unless you have told us that you would prefer not to receive information in this way, only if you have provided us with your postal address or telephone number.</p>
                    <p> 4.3.4 It is up to you to choose how you hear from us. If you express that you do not wish us to use your personal data for marketing purposes as outlined above, please tick the relevant boxes on the forms we use to collect your data, such as our donor forms, website when you make a donation, any of our marketing literature and materials and other direct communication we may have with you face-to-face, via emails or over the telephone.</p>
                    <p> 4.3.5 You can also update or change any of your marketing preferences at any time (including telling us that you don’t want us to contact you for marketing purposes) by:<br></br> Indicating that you do not wish to receive our marketing emails by clicking the ‘unsubscribe’ link in at the end of our marketing emails;<br></br> Asking us to stop sending you marketing texts by sending us an “opt-out” text message, following the instructions we provide you in our initial text; or<br></br> Contacting us through by email at <span className="font-semibold text-primary">amar@aidhumanity.co.uk</span><br></br> By telephone on 03300579957</p>
                    <p> 4.3.6 If you have indicated that you do not wish to be contacted for marketing purposes, we will maintain your details on a suppression list to help ensure that we do not continue to contact you.</p>
                    <p className="font-semibold"> 5 How will we disclose the information we have collected to outside parties?</p>
                    <p> 5.1 Aid humanity may provide your information to service providers that we use. Subject to your communication preferences and our internal policies and procedures, this would include providing your information to third parties that work with us to help deliver on our charitable purposes, other entities that act as fundraisers for Aid Humanity, sell products in aid of fundraising, or provide information and marketing on our behalf.</p>
                    <p> 5.2 Where you have agreed to receive emails for marketing communications from us, we may provide your email address to social media or other similar companies in an encrypted format in order to tailor relevant advertising to you on those social media platforms and other websites, as well as identify audiences with interests similar to yours.</p>
                    <p> 5.3 We enter into contracts with all of these service providers that require them to comply with data protection laws and to ensure that they have appropriate controls in place to protect the security of the information you provide.</p>
                    <p> 5.4 We will never sell your details and will only share your details with third parties (who are not service providers working at our direction) if you ask us to.</p>
                    <p> 5.5 We will not make cold telephone calls to members of the general public; therefore, we will not purchase your data in order to do so.</p>
                    <p> 5.6 We may disclose your personal information if we are requested or required to do so by a regulator or law enforcement or in order to enforce or apply our rights (including in relation to our website or other applicable terms and conditions) or to protect Aid humanity (for example in cases of suspected fraud or defamation, or in order to comply with any other applicable legal obligation</p>
                    <p className="font-semibold"> 6 How we protect your personal information?</p>
                    <p> 6.1 At Aid Humanity we take the appropriate physical, electronic and managerial measures to ensure that we keep your information secure, accurate and up to date. Also, we only keep your information as long as is reasonable and necessary.</p>
                    <p> 6.2 Whilst we use appropriate security measures once we receive your personal information, the transmission of information over the internet is never completely secure. We do our best to protect personal information, but we cannot guarantee the security of information transmitted to our website, so any transmission is at the user’s own risk. However, any payment card details (such as credit or debit cards) we receive on our website are passed securely to our payment processing provider according to the Payment Card Industry Security Standards.</p>
                    <p> 6.3 We may on occasion, need to use the services of a service provider outside the European Economic Area (EEA) for financial and technical reasons. However, any service provide we use to process your information will have to do so in compliance with the European Data Protection Regulations. By submitting your personal information to us, you agree that we may transfer, store or process your data at a location outside the EEA as outlined above. Aid Humanity will take all steps reasonably necessary to ensure that your data is processed securely and in accordance with this privacy policy.</p>
                    <p className="font-semibold"> 7 Job and volunteer applicants and current and former employees.</p>
                    <p> 7.1 If you apply to work at Aid Humanity , we will only use the information you give us to process your application and to monitor recruitment statistics. If we want to disclose information to someone outside of our organisation, for example, if we need a reference, plan to use an external supplier to run background checks or need to get a ‘disclosure’ from the Disclosure and Barring Service (DBS) – we will make sure we tell you beforehand, unless we are required to disclose this information by law.</p>
                    <p> 7.2 When recruiting for a post based in one of our other offices (internationally), Aid Humanity will sometimes need to transfer your personal information to that country to progress the recruitment. It may be that that country does not provide the same level of data protection as in the European Economic Area.,</p>
                    <p> 7.3 If you are unsuccessful in your job application, we will hold your personal information for 6 months only. After this time and only if we have finished recruiting for the post you applied for, then we will destroy or delete your information.</p>
                    <p> 7.4 If you are recruited by us and begin employment, we will put together a personnel file about your employment. The information in this file will be kept secure and we will only use it for matters that apply directly to your employment with us at Aid Humanity.</p>
                    <p> 7.5 When your employment ceases and you leave Aid Humanity, we will keep your file according to our record retention guidelines. You can contact us to find out more about this.</p>
                    <p> 7.6 If you apply for a job or volunteering opportunity at Aid Humanity, we will also collect information so we can assess your suitability for the role.</p>
                    <p> 7.7 Please refer to the Data Protection, Privacy and Recruitment Statement for further information.</p>
                    <p className="font-semibold"> 8 Your credit or debit card information</p>
                    <p> 8.1 If you use your credit or debit card to donate funds to one of our projects at Aid Humanity, we pass your card details securely to our payment processing partners Barclay Card, Paypal, as part of the payment process and payments are processed in accordance with the Payment Card Industry Security Standards. Aid Humanity can assure you that we do not store the details on our website or databases.</p>
                    <p className="font-semibold"> 9 Can you gain access to your personal information?</p>
                    <p> 9.1 You are entitled to request a copy of the personal information Aid Humanity have in relation to you which is kept on our internal database created and accessed only by the Data Processor at Aid Humanity. If you wish to access the information, we may charge an administration fee for processing your request.</p>
                    <p> 9.2 You must make a request in writing to the following:<br></br> The Data Protection Officer<br></br> Email: <span className="font-semibold text-primary">amar@aidhumanity.co.uk</span></p>
                    <p className="font-semibold"> 10 How to update my information or change my marketing preferences?</p>
                    <p> 10.1 If you want to update the information Aid Humanity hold for you, or you think any information we have about you is incorrect or incomplete, please get in touch as soon as possible. Please email <span className="font-semibold text-primary">amar@aidhumanity.co.uk</span> or telephone 03300579957.</p>
                    <p> 10.2 The same details should be used if you want to remove your details from our marketing mailing lists, or to change your marketing preferences.</p>
                    <p className="font-semibold"> 11 Children’s data</p>
                    <p> 11.1 When you register with us, you are stating that you are 18 years of age or over, or are a minor acting with parental consent. By registering, you agree that any information you provide to us about yourself upon registration or at any time is true. Your data will be held as described above.</p>
                    <p className="font-semibold"> 12 Confidentiality</p>
                    <p> 12.1 We cannot be held responsible for the privacy of data collected by websites not owned or managed by Aid Humanity, This includes those linked through our website.</p>
                    <p className="font-semibold"> 13 Emails terms of use</p>
                    <p> 13.1 Emails aren’t always secure, and they may be intercepted or changed after they’ve been sent. Aid Humanity as an organisation do not accept any liability if this happens. The contents of emails exchanged reflect their author’s views and not necessarily those of Aid Humanity</p>
                    <p> 13.2 We would ask that you do not send Aid Humanity any financial data through email. The information in emails is confidential, so if you’ve received one by mistake, please delete it without copying, using, or telling anyone about its contents.</p>
                  </div>
              </div>
            </div>
            <div className="relative ml-32">
              <Page_sidebar />
              <img src={Logo} className="absolute right-[-150px] bottom-[600px] w-64"></img>
              <div className="h-[50rem] w-[1px] bg-[#e6e6e6] absolute -left-16 top-0"></div>
            </div>
          </div>
        </div>
      </div>
      < Footer />
    </section>
  );
}
export default Privacy_page;