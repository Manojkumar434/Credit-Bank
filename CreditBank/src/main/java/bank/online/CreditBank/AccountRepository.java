package bank.online.CreditBank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>
{
	//Hibernate Querey Languages 
	//("select * from tablename where customer_id and password ")---SQL
	
	@Query("from Account where customerId=:cust and password=:pass")
	public Account findAcccountByValidation(long cust,String pass);

}
