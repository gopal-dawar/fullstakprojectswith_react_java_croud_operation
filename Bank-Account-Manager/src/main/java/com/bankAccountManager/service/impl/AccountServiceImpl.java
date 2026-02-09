package com.bankAccountManager.service.impl;

import com.bankAccountManager.entity.Account;
import com.bankAccountManager.exception.AccountNotFoundException;
import com.bankAccountManager.repository.AccountRepo;
import com.bankAccountManager.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AccountServiceImpl implements AccountService {

    @Autowired
    AccountRepo accountRepo;


    @Override
    public Account newAccount(Account account) {
        return accountRepo.save(account);
    }

    @Override
    public Account viewAccountById(long id) {
        return accountRepo.findById(id).orElseThrow(() -> new AccountNotFoundException("Account Not Found at : " + id));
    }

    @Override
    public String updateBalanceById(long id, Account account) {
        Account acc = accountRepo.findById(id).orElseThrow(() -> new AccountNotFoundException("Account Not Foound at : " + id));
        acc.setAccountHolder(account.getAccountHolder());
        acc.setAccountType(account.getAccountType());
        acc.setBalance(account.getBalance());
        acc.setOpeneDate(account.getOpeneDate());
        accountRepo.save(acc);
        return "Successfully Updated!";
    }

    @Override
    public String deleteAccountById(long id) {
        Optional<Account> acc = accountRepo.findById(id);
        if (acc.isPresent()) {
            accountRepo.deleteById(id);
        } else {
            return "Data is Not Found";
        }
        return "Successfully Deleted!";
    }
}
