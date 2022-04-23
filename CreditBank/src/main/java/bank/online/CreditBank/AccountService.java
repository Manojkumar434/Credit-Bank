package bank.online.CreditBank;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService 
{
	@Autowired
	AccountRepository repo;
	
	public Account SavingAccount(Account account)
	{
		
	}
	

}
