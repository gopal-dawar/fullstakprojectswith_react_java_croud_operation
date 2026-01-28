package com.ProductInventoryManager.controller;


import com.ProductInventoryManager.entity.Inventory;
import com.ProductInventoryManager.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/product")
public class InventoryController {


    @Autowired
    InventoryService inventoryService;

    @PostMapping("/save")
    public ResponseEntity<Inventory> saveProduct(@RequestBody Inventory inventory) {
        return new ResponseEntity<>(inventoryService.addProduct(inventory), HttpStatus.CREATED);
    }

    @GetMapping("/viewall")
    public ResponseEntity<List<Inventory>> viewAllProduct() {
        return new ResponseEntity<>(inventoryService.viewAllProduct(), HttpStatus.OK);
    }

    @GetMapping("/viewbyid/{id}")
    public ResponseEntity<Inventory> viewById(@PathVariable int id) {
        return new ResponseEntity<>(inventoryService.viewById(id), HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Inventory> updateQuantityById(@PathVariable int id, @RequestBody Inventory inventory) {
        return new ResponseEntity<>(inventoryService.updateQuantityById(id, inventory), HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteById(@PathVariable int id) {
        return new ResponseEntity<>(inventoryService.deleteById(id), HttpStatus.OK);
    }

}
