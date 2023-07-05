import { FinancialAdvisorInterface } from 'interfaces/financial-advisor';
import { TraderInterface } from 'interfaces/trader';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  financial_advisor?: FinancialAdvisorInterface[];
  trader?: TraderInterface[];
  user?: UserInterface;
  _count?: {
    financial_advisor?: number;
    trader?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
