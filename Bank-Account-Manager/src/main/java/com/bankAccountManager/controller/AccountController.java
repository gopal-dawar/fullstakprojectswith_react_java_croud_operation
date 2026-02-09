package com.bankAccountManager.controller;

import com.bankAccountManager.entity.Account;
import com.bankAccountManager.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class AccountController {

    @Autowired
    AccountService accountService;


    @PostMapping("/save")
    public ResponseEntity<Account> newAccount(@RequestBody Account account) {
        return new ResponseEntity<>(accountService.newAccount(account), HttpStatus.OK);
    }

    @GetMapping("/viewById/{id}")
    public ResponseEntity<Account> viewById(@PathVariable long id) {
        return new ResponseEntity<>(accountService.viewAccountById(id), HttpStatus.OK);
    }


    @PutMapping("/update/{id}")
    public ResponseEntity<String> udpateAccount(@PathVariable long id, @RequestBody Account account) {
        return new ResponseEntity<>(accountService.updateBalanceById(id, account), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteAccountById(@PathVariable long id) {
        return new ResponseEntity<>(accountService.deleteAccountById(id), HttpStatus.OK);
    }
}
