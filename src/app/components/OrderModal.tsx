import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog.tsx";
import { Button } from "./ui/button.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { Badge } from "./ui/badge.tsx";
import { Minus, Plus, ShoppingCart, X } from "lucide-react";
import { toast } from "sonner";

interface OrderItem {
  name: string;
  price: number;
  quantity: number;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  itemName: string;
  itemPrice: string;
  itemDescription: string;
}

export function OrderModal({ isOpen, onClose, itemName, itemPrice, itemDescription }: OrderModalProps) {
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const priceNum = parseFloat(itemPrice.replace("RM ", ""));

  const handleOrder = () => {
    toast.success(`Added ${quantity}x ${itemName} to cart!`, {
      description: `Total: RM ${(priceNum * quantity).toFixed(2)}`,
    });
    onClose();
    setQuantity(1);
    setSpecialInstructions("");
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{itemName}</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <p className="text-gray-600">{itemDescription}</p>
          
          <div className="flex items-center justify-between py-4 border-y">
            <span className="text-lg">Price per item:</span>
            <span className="text-2xl text-orange-600">{itemPrice}</span>
          </div>

          <div>
            <Label>Quantity</Label>
            <div className="flex items-center gap-4 mt-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-xl w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label htmlFor="instructions">Special Instructions (Optional)</Label>
            <Input
              id="instructions"
              placeholder="e.g., Extra spicy, no onions..."
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              className="mt-2"
            />
          </div>

          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg">Total:</span>
              <span className="text-3xl text-orange-600">
                RM {(priceNum * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          <Button
            onClick={handleOrder}
            className="w-full bg-orange-600 hover:bg-orange-700"
            size="lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
