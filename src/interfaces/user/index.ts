import { FinancialAdvisorInterface } from 'interfaces/financial-advisor';
import { TraderInterface } from 'interfaces/trader';

import { GetQueryInterface } from '../get-query.interface';

export interface UserInterface {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roq_user_id: string;
  tenant_id: string;

  financial_advisor: FinancialAdvisorInterface[];
  trader: TraderInterface[];
}

export interface UserGetQueryInterface extends GetQueryInterface {
  roq_user_id?: string;
  tenant_id?: string;
}
