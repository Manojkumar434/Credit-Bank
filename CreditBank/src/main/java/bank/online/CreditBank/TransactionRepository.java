package bank.online.CreditBank;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionRepository extends JpaRepository<Transaction, Long>
{
	// findAll	>> multiple
		// findAllByDot	>> multiple data by dot
		// 
		// findBy	>> single
		// findById	>> single data by primary key
		// findByAmount	>> single data by amount
		
		public List<Transaction> findAllByAccount(Account account);

}
