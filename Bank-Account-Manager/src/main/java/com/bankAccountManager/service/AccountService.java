package com.bankAccountManager.service;

import com.bankAccountManager.entity.Account;

public interface AccountService {
    Account newAccount(Account account);

    Account viewAccountById(long id);

    String updateBalanceById(long id, Account account);

    String deleteAccountById(long id);

}
