import logo from './logo.svg';
import './App.css';
import 'react-circular-progressbar/dist/styles.css';
import './css/normalize.css';
import Status_bug from './components/status/status--bug';

import Status_section from './components/status/status-section';







import Dashboard_sidebar from './components/dashboard/dashboard_sidebar/dashboard_sidebar';
import Profile_sidebar from './components/dashboard/profile_sidebar/profile_sidebar';
import Portal from "./components/dashboard/portal"
import Image_upload from './components/dashboard/image_upload';
import Badge_bronze from './components/dashboard/badge_bronze';
import Payment_methods_page from "./components/dashboard/payment_methods_page";
import Profile_page from "./components/dashboard/profile_page";
import Monthly_donations_page from "./components/dashboard/monthly_donations_page";
import Preferences_page from "./components/dashboard/preferences_page";
import Donation_history_page from "./components/dashboard/donation_history_page";
import Security_page from "./components/dashboard/security_page";
import Fundraising_page from "./components/dashboard/fundraising_page";
import Dashboard_page from "./components/dashboard/dashboard_page";
import Dashboard_layout from "./components/dashboard/dashboard_layout";
import Circular_progress_bar from "./components/dashboard/circular_progress_bar";
import Appeal_view from './components/appeals/appeal_view';
import Appeal_share from './components/appeals/appeal_share';
import Appeal_media from './components/appeals/appeal_media';
import Appeal_donations from './components/appeals/appeal_donations';
import Appeal_settings from './components/appeals/appeal_settings';
import Appeal_cancel from './components/appeals/appeal_cancel';
// appeal pages
import Appeal_edit from './components/appeals/appeal_edit';
import Appeal_media_page from './components/appeals/appeal_media_page';
import Appeal_donations_page from './components/appeals/pages/appeal_donations_page';
import Appeal_view_page from './components/appeals/pages/appeal_view_page';
import Appeal_edit_page from './components/appeals/pages/appeal_edit_page';
import Appeal_settings_page from './components/appeals/pages/appeal_settings_page';
// cart sidebar
import Cart_sidebar from './components/cart_sidebar/cart_sidebar';

// menu options
import Menu from './components/menu_options/pages/menu';
import Appeals from './components/menu_options/pages/appeals';
import Emergency from './components/menu_options/pages/emergency';
import Zakat from './components/menu_options/pages/zakat';
import Login from './components/menu_options/pages/login';
import Donate from './components/menu_options/pages/donate';
import Donate_now from './components/menu_options/pages/donate_now';

// generic pages
import Congratulations_page from './components/generic/pages/congratulations_page';
import Story_page from './components/generic/pages/story_page';
import Contact_page from './components/generic/pages/contact_page';
import Donation_policy_page from './components/generic/pages/donation_policy_page';
import How_it_works_page from './components/generic/pages/how_it_works_page';
import Refund_policy_page from './components/generic/pages/refund_policy_page';
import Marketing_page from './components/generic/pages/marketing_page';
import Fundraiser_page from './components/generic/pages/fundraiser_page';
import Rewards_page from './components/generic/pages/rewards_page';
import Terms_page from './components/generic/pages/terms_page';
import Privacy_policy_page from './components/generic/pages/privacy_policy_page';
import Zakat_calculator_page from './components/generic/pages/zakat_calculator_page';

import { Route, Routes } from "react-router-dom";
function App() {
  return (    
    <Routes>
      {/* generic pages */}
      <Route path="/generic/congratulations_page" element={<Congratulations_page />} />
      <Route path="/generic/story_page" element={<Story_page />} />
      <Route path="/generic/donation_policy_page" element={<Donation_policy_page />} />
      <Route path="/generic/contact_page" element={<Contact_page />} />
      <Route path="/generic/how_it_works_page" element={<How_it_works_page />} />
      <Route path="/generic/refund_policy_page" element={<Refund_policy_page />} />
      <Route path="/generic/marketing_page" element={<Marketing_page />} />
      <Route path="/generic/fundraiser_page" element={<Fundraiser_page />} />
      <Route path="/generic/rewards_page" element={<Rewards_page />} />
      <Route path="/generic/terms_page" element={<Terms_page />} />
      <Route path="/generic/privacy_policy_page" element={<Privacy_policy_page />} />
      <Route path="/generic/zakat_calculator_page" element={<Zakat_calculator_page />} />
     
      <Route path="/dashboard_sidebar" element={<Dashboard_sidebar />} />
      <Route path="/profile_sidebar" element={<Profile_sidebar />} />
      <Route path="/portal" element={<Portal />} />
      <Route path="/payment_methods_page" element={<Payment_methods_page />} />
      <Route path="/profile_page" element={<Profile_page />} />
      <Route path="/monthly_donations_page" element={<Monthly_donations_page />} />
      <Route path="/preferences_page" element={<Preferences_page />} />
      <Route path="/donation_history_page" element={<Donation_history_page />} />
      <Route path="/security_page" element={<Security_page />} />
      <Route path="/fundraising_page" element={<Fundraising_page />} />
      <Route path="/dashboard_page" element={<Dashboard_page />} />

      <Route path="/dashboard_layout" element={<Dashboard_layout />} />
      <Route path="/appeal_view" element={<Appeal_view />} />
      <Route path="/appeal_share" element={<Appeal_share />} />
      <Route path="/appeal_media" element={<Appeal_media />} />

      {/* appeal pages */}
      <Route path="/appeal_media_page" element={<Appeal_media_page />} />
      <Route path="/appeal_donations_page" element={<Appeal_donations_page />} />
      <Route path="/appeal_view_page" element={<Appeal_view_page />} />
      <Route path="/appeal_settings_page" element={<Appeal_settings_page />} />
      <Route path="/appeal_edit_page" element={<Appeal_edit_page />} />

      {/* cart sidebar */}
      <Route path="/cart_sidebar" element={<Cart_sidebar />} />


      <Route path="/appeal_donations" element={<Appeal_donations />} />
      <Route path="/appeal_settings" element={<Appeal_settings />} />
      <Route path="/appeal_cancel" element={<Appeal_cancel />} />
      <Route path="/appeal_edit" element={<Appeal_edit />} />



      <Route path="/" element={<Preferences_page />} />


      <Route path="/image_upload" element={<Image_upload />} />
      <Route path="/badge_bronze" element={<Badge_bronze />} />
      <Route path="/circular_progress_bar" element={<Circular_progress_bar />} />

      {/* menu options */}
      <Route path="/menu" element={<Menu />} />
      <Route path="/appeals" element={<Appeals />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/zakat" element={<Zakat />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/donate_now" element={<Donate_now />} />

    </Routes>
    
  );
}

export default App;
