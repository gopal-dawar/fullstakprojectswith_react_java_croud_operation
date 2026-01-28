package com.ProductInventoryManager.serviceImpl;

import com.ProductInventoryManager.entity.Inventory;
import com.ProductInventoryManager.exception.ProductNotFoundException;
import com.ProductInventoryManager.repository.InventoryRepo;
import com.ProductInventoryManager.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    InventoryRepo inventoryRepo;

    @Override
    public Inventory addProduct(Inventory inventory) {
        return inventoryRepo.save(inventory);
    }

    @Override
    public List<Inventory> viewAllProduct() {
        return inventoryRepo.findAll();
    }

    @Override
    public Inventory updateQuantityById(int id, Inventory inventory) {
        Inventory i = inventoryRepo.findById(id).orElseThrow(() -> new ProductNotFoundException("Product Not Found at : " + id));
        i.setName(inventory.getName());
        i.setPrice(inventory.getPrice());
        i.setQuantity(inventory.getQuantity());
        i.setManufacturer(inventory.getManufacturer());
        return inventoryRepo.save(i);
    }

    @Override
    public String deleteById(int id) {
        inventoryRepo.deleteById(id);
        return "Successfully Deleted!";
    }

    @Override
    public Inventory viewById(int id) {
        return inventoryRepo.findById(id).orElseThrow(() -> new ProductNotFoundException("Product Not Found at : " + id));
    }
}
