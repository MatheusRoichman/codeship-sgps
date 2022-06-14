import AdminForm from '../../components/CompanyRegisterForms/AdminForm'
import CompanyForm from '../../components/CompanyRegisterForms/CompanyForm'
import { useRouter } from 'next/router'

export default function CompanyRegisterForms() {
  const router = useRouter();
  const { formStep } = router.query;
  const routes = {
    admin: <AdminForm />,
    empresa: <CompanyForm />
  }

  return routes[formStep];
}