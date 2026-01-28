package com.ProductInventoryManager.service;

import com.ProductInventoryManager.entity.Inventory;

import java.util.List;

public interface InventoryService {
    Inventory addProduct(Inventory inventory);

    List<Inventory> viewAllProduct();

    Inventory updateQuantityById(int id, Inventory inventory);

    String deleteById(int id);

    Inventory viewById(int id);

}
