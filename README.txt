JMK Website -> CRM Live Integration

Replace these files in the JMK website project using the same paths.
The Supabase SQL migration 008_website_enquiry_to_raw_contacts.sql must already be run.

Local test:
1. npm install
2. npm run dev
3. Submit Contact, Home consultation, Finance/Assets selection, and Solar forms.
4. Login to CRM and open the matching segment under Raw Contacts.

Vercel Environment Variables:
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY

After adding/updating variables, redeploy the website.
