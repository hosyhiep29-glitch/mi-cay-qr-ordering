    // Menu Data
    const menuItems = [
      // Mỳ Cay
      { id: 1, name: 'Mỳ Cay Hải Sản', category: 'noodle', price: 55000, originalPrice: 69000, emoji: '🍜', description: 'Mỳ cay đặc biệt với tôm, mực, nghêu tươi ngon', spicy: true, popular: true, rating: 4.9, reviews: 256 },
      { id: 2, name: 'Mỳ Cay Bò Mỹ', category: 'noodle', price: 65000, originalPrice: 82000, emoji: '🥩', description: 'Mỳ cay với thịt bò Mỹ thượng hạng, mềm ngọt', spicy: true, popular: true, rating: 4.8, reviews: 189 },
      { id: 3, name: 'Mỳ Cay Kim Chi', category: 'noodle', price: 45000, originalPrice: 56000, emoji: '🥬', description: 'Mỳ cay truyền thống với kim chi Hàn Quốc', spicy: true, rating: 4.7, reviews: 167 },
      { id: 4, name: 'Mỳ Cay Phô Mai', category: 'noodle', price: 58000, originalPrice: 73000, emoji: '🧀', description: 'Mỳ cay phủ phô mai Mozzarella béo ngậy', spicy: true, popular: true, rating: 4.9, reviews: 312 },
      { id: 5, name: 'Mỳ Cay Xúc Xích', category: 'noodle', price: 48000, originalPrice: 60000, emoji: '🌭', description: 'Mỳ cay với xúc xích Đức thơm lừng', spicy: true, rating: 4.6, reviews: 145 },
      { id: 6, name: 'Mỳ Cay Thập Cẩm', category: 'noodle', price: 75000, originalPrice: 94000, emoji: '🍲', description: 'Đầy đủ hải sản, bò, xúc xích, phô mai', spicy: true, popular: true, rating: 5.0, reviews: 423 },
      
      // Món Phụ
      { id: 7, name: 'Tokbokki', category: 'side', price: 35000, originalPrice: 44000, emoji: '🥢', description: 'Bánh gạo Hàn Quốc sốt cay ngọt', spicy: true, rating: 4.8, reviews: 234 },
      { id: 8, name: 'Gà Rán Giòn', category: 'side', price: 45000, originalPrice: 56000, emoji: '🍗', description: 'Gà rán kiểu Hàn Quốc, giòn tan', popular: true, rating: 4.9, reviews: 298 },
      { id: 9, name: 'Kimbap Trứng', category: 'side', price: 25000, originalPrice: 31000, emoji: '🍙', description: 'Cơm cuộn rong biển trứng cuộn', rating: 4.7, reviews: 156 },
      { id: 10, name: 'Mandu Chiên', category: 'side', price: 30000, originalPrice: 38000, emoji: '🥟', description: 'Há cảo Hàn Quốc chiên vàng giòn', rating: 4.6, reviews: 123 },
      { id: 11, name: 'Cánh Gà BBQ', category: 'side', price: 55000, originalPrice: 69000, emoji: '🍖', description: 'Cánh gà nướng sốt BBQ Hàn Quốc', spicy: true, popular: true, rating: 4.9, reviews: 267 },
      { id: 12, name: 'Xúc Xích Nướng', category: 'side', price: 28000, originalPrice: 35000, emoji: '🌭', description: 'Xúc xích Đức nướng phô mai', rating: 4.5, reviews: 98 },
      
      // Đồ Uống
      { id: 13, name: 'Trà Đào Cam Sả', category: 'drink', price: 32000, originalPrice: 40000, emoji: '🍑', description: 'Trà đào tươi mát với cam sả', popular: true, rating: 4.8, reviews: 345 },
      { id: 14, name: 'Trà Sữa Trân Châu', category: 'drink', price: 35000, originalPrice: 44000, emoji: '🧋', description: 'Trà sữa thơm béo với trân châu đường đen', popular: true, rating: 4.9, reviews: 412 },
      { id: 15, name: 'Soda Việt Quất', category: 'drink', price: 28000, originalPrice: 35000, emoji: '🫐', description: 'Soda tươi mát vị việt quất', rating: 4.6, reviews: 156 },
      { id: 16, name: 'Nước Ép Dưa Hấu', category: 'drink', price: 25000, originalPrice: 31000, emoji: '🍉', description: 'Nước ép dưa hấu tươi 100%', rating: 4.7, reviews: 189 },
      { id: 17, name: 'Coca Cola', category: 'drink', price: 15000, originalPrice: 19000, emoji: '🥤', description: 'Coca Cola lon lạnh', rating: 4.5, reviews: 87 },
      { id: 18, name: 'Bia Hàn Quốc', category: 'drink', price: 35000, originalPrice: 44000, emoji: '🍺', description: 'Bia Hite Extra Cold', rating: 4.6, reviews: 134 },
      
      // Combo
      { id: 19, name: 'Combo Couple', category: 'combo', price: 159000, originalPrice: 199000, emoji: '💕', description: '2 Mỳ Cay + 2 Đồ Uống + 1 Món Phụ', popular: true, rating: 4.9, reviews: 234, isCombo: true },
      { id: 20, name: 'Combo Gia Đình', category: 'combo', price: 299000, originalPrice: 374000, emoji: '👨‍👩‍👧‍👦', description: '4 Mỳ Cay + 4 Đồ Uống + 2 Món Phụ', popular: true, rating: 5.0, reviews: 167, isCombo: true },
      { id: 21, name: 'Combo Sinh Viên', category: 'combo', price: 89000, originalPrice: 111000, emoji: '🎓', description: '1 Mỳ Cay + 1 Đồ Uống + 1 Tokbokki', rating: 4.8, reviews: 456, isCombo: true },
      { id: 22, name: 'Combo Party', category: 'combo', price: 499000, originalPrice: 624000, emoji: '🎉', description: '6 Mỳ Cay + 6 Đồ Uống + 4 Món Phụ', rating: 4.9, reviews: 89, isCombo: true }
    ];

    // Cart state
    let cart = [];
    let currentFilter = 'all';
    let orders = [];
    let currentRecordCount = 0;

    // Config
    const defaultConfig = {
      restaurant_name: 'Mỳ Cay 7 Cấp Độ',
      welcome_text: 'Cay đến tê lưỡi! 🔥',
      promo_text: 'GIẢM 20% TẤT CẢ MÓN',
      background_color: '#1a1a2e',
      surface_color: '#16213e',
      text_color: '#ffffff',
      primary_color: '#FF6B35',
      secondary_color: '#F7931E'
    };

    // Format currency
    function formatPrice(price) {
      return price.toLocaleString('vi-VN') + 'đ';
    }

    // Render menu
    function renderMenu(filter = 'all') {
      const grid = document.getElementById('menu-grid');
      const filtered = filter === 'all' ? menuItems : menuItems.filter(item => item.category === filter);
      
      grid.innerHTML = filtered.map((item, index) => `
        <div class="menu-card glass-effect rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer neon-border" onclick="openItemModal(${item.id})" style="animation-delay: ${index * 50}ms">
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center">
              <span class="text-6xl md:text-7xl float-animation" style="animation-delay: ${index * 100}ms">${item.emoji}</span>
            </div>
            ${item.popular ? '<span class="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">HOT</span>' : ''}
            ${item.spicy ? '<span class="absolute top-2 right-2 text-2xl">🌶️</span>' : ''}
            <div class="absolute bottom-2 right-2 flex items-center gap-1 bg-black/60 px-2 py-1 rounded-full">
              <span class="text-yellow-400">⭐</span>
              <span class="text-xs font-bold">${item.rating}</span>
            </div>
          </div>
          <div class="p-3">
            <h3 class="font-bold text-sm md:text-base truncate">${item.name}</h3>
            <p class="text-xs text-gray-400 truncate mt-1">${item.description}</p>
            <div class="flex items-center justify-between mt-3">
              <div>
                <span class="text-orange-400 font-bold">${formatPrice(item.price)}</span>
                <span class="text-xs text-gray-500 line-through ml-1">${formatPrice(item.originalPrice)}</span>
              </div>
              <button onclick="event.stopPropagation(); addToCart(${item.id})" class="w-8 h-8 spicy-gradient rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                <span class="text-lg">+</span>
              </button>
            </div>
          </div>
        </div>
      `).join('');
    }

    // Filter category
    function filterCategory(category) {
      currentFilter = category;
      document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
      event.target.closest('.category-btn').classList.add('active');
      renderMenu(category);
    }

    // Open item modal
    function openItemModal(id) {
      const item = menuItems.find(i => i.id === id);
      if (!item) return;

      const modal = document.getElementById('item-modal');
      const content = document.getElementById('item-modal-content');
      
      content.innerHTML = `
        <div class="relative">
          <div class="h-32 bg-gradient-to-br from-orange-500/30 to-red-500/30 flex items-center justify-center">
            <span class="text-6xl float-animation">${item.emoji}</span>
          </div>
          <button onclick="closeItemModal()" class="absolute top-3 right-3 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
          ${item.popular ? '<span class="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full font-bold text-sm">🔥 Bán Chạy</span>' : ''}
        </div>
        <div class="p-4 space-y-2">
          <div>
            <h2 class="text-lg font-bold">${item.name}</h2>
            <div class="flex items-center gap-2 mt-1 text-xs">
              <div class="flex items-center gap-1">
                <span class="text-yellow-400">⭐</span>
                <span class="font-bold">${item.rating}</span>
              </div>
              <span class="text-gray-500">•</span>
              <span class="text-gray-400">${item.reviews} đánh giá</span>
              ${item.spicy ? '<span class="text-gray-500">•</span><span>🌶️</span>' : ''}
            </div>
          </div>
          
          <p class="text-xs text-gray-400">${item.description}</p>
          
          ${item.spicy ? `
          <div>
            <p class="font-semibold text-xs mb-1">Độ cay:</p>
            <div class="flex gap-1">
              ${[1,2,3,4,5,6,7].map(level => `
                <button onclick="selectSpicy(this, ${level})" class="spicy-level flex-1 h-7 rounded-md border-2 border-orange-500/50 flex items-center justify-center text-xs font-bold hover:bg-orange-500/20 transition-all ${level === 3 ? 'active' : ''}">
                  ${level}
                </button>
              `).join('')}
            </div>
          </div>
          ` : ''}
          
          <div class="flex items-center gap-3 pt-2 border-t border-orange-500/30">
            <div>
              <span class="text-base font-bold text-orange-400">${formatPrice(item.price)}</span>
              <span class="text-xs text-gray-500 line-through ml-1">${formatPrice(item.originalPrice)}</span>
            </div>
            <button onclick="addToCart(${item.id}); closeItemModal();" class="flex-1 spicy-gradient px-4 py-2 rounded-lg font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2">
              <span>🛒</span> Thêm vào
            </button>
          </div>
        </div>
      `;
      
      modal.classList.remove('hidden');
    }

    function closeItemModal() {
      document.getElementById('item-modal').classList.add('hidden');
    }

    function selectSpicy(btn, level) {
      document.querySelectorAll('.spicy-level').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }

    // Cart functions
    function addToCart(id) {
      const item = menuItems.find(i => i.id === id);
      if (!item) return;

      const existing = cart.find(c => c.id === id);
      if (existing) {
        existing.quantity++;
      } else {
        cart.push({ ...item, quantity: 1 });
      }
      updateCartBadge();
      showToast(`Đã thêm ${item.name} vào giỏ hàng! 🛒`);
    }

    function updateCartBadge() {
      const badge = document.getElementById('cart-badge');
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      if (total > 0) {
        badge.textContent = total;
        badge.classList.remove('hidden');
      } else {
        badge.classList.add('hidden');
      }
    }

    function openCart() {
      renderCart();
      document.getElementById('cart-sidebar').classList.remove('hidden');
    }

    function closeCart() {
      document.getElementById('cart-sidebar').classList.add('hidden');
    }

    function renderCart() {
      const container = document.getElementById('cart-items');
      
      if (cart.length === 0) {
        container.innerHTML = `
          <div class="text-center py-12">
            <span class="text-6xl block mb-4">🛒</span>
            <p class="text-gray-400">Giỏ hàng trống</p>
            <p class="text-sm text-gray-500">Hãy thêm món ngon vào giỏ hàng nhé!</p>
          </div>
        `;
        document.getElementById('checkout-btn').disabled = true;
      } else {
        container.innerHTML = cart.map(item => `
          <div class="glass-effect rounded-xl p-3 flex gap-3" data-cart-id="${item.id}">
            <div class="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <span class="text-3xl">${item.emoji}</span>
            </div>
            <div class="flex-1 min-w-0">
              <h4 class="font-semibold truncate">${item.name}</h4>
              <p class="text-orange-400 font-bold">${formatPrice(item.price)}</p>
            </div>
            <div class="flex items-center gap-2">
              <button onclick="updateQuantity(${item.id}, -1)" class="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">-</button>
              <span class="w-8 text-center font-bold">${item.quantity}</span>
              <button onclick="updateQuantity(${item.id}, 1)" class="w-8 h-8 rounded-full spicy-gradient flex items-center justify-center hover:opacity-90 transition-all">+</button>
            </div>
          </div>
        `).join('');
        document.getElementById('checkout-btn').disabled = false;
      }

      // Update totals
      const subtotal = cart.reduce((sum, item) => sum + (item.originalPrice * item.quantity), 0);
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const discount = subtotal - total;

      document.getElementById('cart-subtotal').textContent = formatPrice(subtotal);
      document.getElementById('cart-discount').textContent = `-${formatPrice(discount)}`;
      document.getElementById('cart-total').textContent = formatPrice(total);
    }

    function updateQuantity(id, delta) {
      const item = cart.find(c => c.id === id);
      if (!item) return;

      item.quantity += delta;
      if (item.quantity <= 0) {
        cart = cart.filter(c => c.id !== id);
      }
      updateCartBadge();
      renderCart();
    }

    // Checkout
    async function processCheckout() {
      if (cart.length === 0) return;

      if (currentRecordCount >= 999) {
        showToast('Đã đạt giới hạn đơn hàng. Vui lòng liên hệ quán!', 'error');
        return;
      }

      const checkoutBtn = document.getElementById('checkout-btn');
      checkoutBtn.disabled = true;
      checkoutBtn.innerHTML = '<span class="animate-spin">⏳</span> Đang xử lý...';

      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      const orderCode = 'MC' + Date.now().toString().slice(-6);
      const tableNumber = document.getElementById('table-select').value;
      const note = document.getElementById('order-note').value;

      const orderData = {
        order_id: orderCode,
        items: JSON.stringify(cart.map(i => ({ name: i.name, qty: i.quantity, price: i.price }))),
        total: total,
        table_number: tableNumber,
        status: 'pending',
        created_at: new Date().toISOString(),
        customer_note: note
      };

      try {
        if (window.dataSdk) {
          const result = await window.dataSdk.create(orderData);
          if (result.isError) {
            throw new Error('Failed to save order');
          }
        }

        // Show success
        closeCart();
        showSuccessModal(orderCode);
        
        // Reset cart
        cart = [];
        updateCartBadge();
        document.getElementById('order-note').value = '';
      } catch (error) {
        showToast('Có lỗi xảy ra. Vui lòng thử lại!', 'error');
      } finally {
        checkoutBtn.disabled = false;
        checkoutBtn.innerHTML = '<span>💳</span> Thanh toán';
      }
    }

    function showSuccessModal(orderCode) {
      const modal = document.getElementById('success-modal');
      document.getElementById('order-code').textContent = '#' + orderCode;
      modal.classList.remove('hidden');
      
      // Create confetti
      createConfetti();
    }

    function createConfetti() {
      const container = document.getElementById('confetti-container');
      container.innerHTML = '';
      
      const colors = ['#FF6B35', '#F7931E', '#FFD700', '#FF4444', '#44FF44', '#4444FF'];
      
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        container.appendChild(confetti);
      }
    }

    function closeSuccessModal() {
      document.getElementById('success-modal').classList.add('hidden');
    }

    // AI Suggestion
    function showAISuggestion() {
      const modal = document.getElementById('ai-modal');
      const content = document.getElementById('ai-content');
      
      // Simulate AI thinking
      content.innerHTML = `
        <div class="text-center py-8">
          <div class="w-16 h-16 mx-auto mb-4 spicy-gradient rounded-full flex items-center justify-center animate-pulse">
            <span class="text-3xl">🤖</span>
          </div>
          <p class="text-gray-400">AI đang phân tích sở thích của bạn...</p>
        </div>
      `;
      
      modal.classList.remove('hidden');
      
      // Show suggestions after delay
      setTimeout(() => {
        const season = getSeason();
        const suggestions = getAISuggestions(season);
        
        content.innerHTML = `
          <div class="space-y-4">
            <div class="glass-effect rounded-xl p-4">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-2xl">${season.emoji}</span>
                <div>
                  <p class="font-bold text-orange-400">Gợi ý theo mùa ${season.name}</p>
                  <p class="text-xs text-gray-400">Dựa trên thời tiết và xu hướng</p>
                </div>
              </div>
              <p class="text-sm text-gray-300">${season.description}</p>
            </div>
            
            ${suggestions.map(combo => `
              <div class="glass-effect rounded-xl p-4 neon-border">
                <div class="flex items-center justify-between mb-3">
                  <h4 class="font-bold text-lg">${combo.name}</h4>
                  <span class="spicy-gradient px-3 py-1 rounded-full text-sm font-bold">Tiết kiệm ${combo.save}%</span>
                </div>
                <div class="flex gap-2 mb-3">
                  ${combo.items.map(item => `
                    <div class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">${item}</span>
                    </div>
                  `).join('')}
                </div>
                <p class="text-sm text-gray-400 mb-3">${combo.description}</p>
                <div class="flex items-center justify-between">
                  <div>
                    <span class="text-xl font-bold text-orange-400">${formatPrice(combo.price)}</span>
                    <span class="text-sm text-gray-500 line-through ml-2">${formatPrice(combo.originalPrice)}</span>
                  </div>
                  <button onclick="addComboToCart('${combo.id}')" class="spicy-gradient px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all">
                    Thêm combo
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }, 1500);
    }

    function getSeason() {
      const month = new Date().getMonth();
      if (month >= 2 && month <= 4) return { name: 'Xuân', emoji: '🌸', description: 'Thời tiết ấm áp, phù hợp với món cay vừa và đồ uống mát lạnh.' };
      if (month >= 5 && month <= 7) return { name: 'Hè', emoji: '☀️', description: 'Trời nóng bức, gợi ý đồ uống mát và món ăn giải nhiệt.' };
      if (month >= 8 && month <= 10) return { name: 'Thu', emoji: '🍂', description: 'Se se lạnh, hoàn hảo cho mỳ cay nóng hổi và trà sữa ấm.' };
      return { name: 'Đông', emoji: '❄️', description: 'Lạnh giá, thích hợp với món cay nồng và đồ uống nóng.' };
    }

    function getTimeOfDay() {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 11) return { name: 'Sáng', emoji: '🌅', type: 'morning' };
      if (hour >= 11 && hour < 14) return { name: 'Trưa', emoji: '☀️', type: 'lunch' };
      if (hour >= 14 && hour < 17) return { name: 'Chiều', emoji: '🌤️', type: 'afternoon' };
      if (hour >= 17 && hour < 21) return { name: 'Tối', emoji: '🌙', type: 'evening' };
      return { name: 'Đêm khuya', emoji: '🌙', type: 'night' };
    }

    function getAISuggestions(season) {
      const timeOfDay = getTimeOfDay();
      const seasonName = season.name;
      const timeType = timeOfDay.type;

      const allSuggestions = {
        'Xuân-morning': [
          { id: 'ai-1', name: 'Combo Sáng Tươi', items: ['🍜', '🍙', '🍑'], description: 'Mỳ Cay Kim Chi + Kimbap + Trà Đào - Khởi động ngày mới tươi tắn', price: 98000, originalPrice: 123000, save: 20 },
          { id: 'ai-2', name: 'Combo Sáng Nhẹ', items: ['🥢', '🍙', '🧋'], description: 'Tokbokki + Kimbap + Trà Sữa - Ăn nhẹ trước khi bận rộn', price: 85000, originalPrice: 106000, save: 20 },
          { id: 'ai-3', name: 'Combo Sáng Năng Lượng', items: ['🍜', '🍗', '🍑'], description: 'Mỳ Cay Hải Sản + Gà Rán + Trà Đào - Sức mạnh cho ngày dài', price: 115000, originalPrice: 144000, save: 20 },
          { id: 'ai-4', name: 'Combo Đôi Sáng', items: ['🍜', '🍜', '🍙', '🧋'], description: '2 Mỳ Cay + Kimbap + Trà Sữa - Hai người, thoải mái ăn cùng', price: 168000, originalPrice: 210000, save: 20 },
          { id: 'ai-5', name: 'Combo Gia Đình Sáng', items: ['🍜', '🍜', '🍗', '🍑'], description: '2 Mỳ Cay + Gà Rán + Trà Đào - Bữa sáng đầm ấm gia đình', price: 185000, originalPrice: 231000, save: 20 }
        ],
        'Xuân-lunch': [
          { id: 'ai-1', name: 'Combo Trưa Cây Chuối', items: ['🍜', '🥢', '🍑'], description: 'Mỳ Cay Phô Mai + Tokbokki + Trà Đào - Trưa hè nhẹ nhàng', price: 105000, originalPrice: 131000, save: 20 },
          { id: 'ai-2', name: 'Combo Trưa Thịt Mỹ', items: ['🍜', '🥢', '🍉'], description: 'Mỳ Cay Bò Mỹ + Tokbokki + Nước Ép Dưa Hấu - Mát lạnh bổ dưỡng', price: 118000, originalPrice: 148000, save: 20 },
          { id: 'ai-3', name: 'Combo Trưa Thập Cẩm', items: ['🍲', '🍖', '🧋'], description: 'Mỳ Cay Thập Cẩm + Cánh Gà BBQ + Trà Sữa - Đủ đầy và thỏa thích', price: 138000, originalPrice: 173000, save: 20 },
          { id: 'ai-4', name: 'Combo Trưa Gia Đình', items: ['🍜', '🍜', '🍗', '🍑'], description: '2 Mỳ Cay + Gà Rán + Trà Đào - Ăn cơm trưa cùng gia đình', price: 199000, originalPrice: 249000, save: 20 },
          { id: 'ai-5', name: 'Combo Trưa Party', items: ['🍜', '🍜', '🥟', '🍖'], description: '2 Mỳ Cay + Mandu + Cánh Gà - Rủ bạn ăn trưa siêu vui', price: 172000, originalPrice: 215000, save: 20 }
        ],
        'Xuân-afternoon': [
          { id: 'ai-1', name: 'Combo Chiều Xả Stress', items: ['🍜', '🥢', '🍉'], description: 'Mỳ Cay Kim Chi + Tokbokki + Nước Ép Dưa Hấu - Giải tỏa căng thẳng', price: 95000, originalPrice: 119000, save: 20 },
          { id: 'ai-2', name: 'Combo Chiều Mát Lạnh', items: ['🥢', '🍙', '🍉'], description: 'Tokbokki + Kimbap + Nước Ép - Ăn chiều mát mà không nặng', price: 78000, originalPrice: 100000, save: 22 },
          { id: 'ai-3', name: 'Combo Chiều Công Sở', items: ['🍜', '🌭', '🧋'], description: 'Mỳ Cay Xúc Xích + Tokbokki + Trà Sữa - Ăn vặt công sở', price: 88000, originalPrice: 110000, save: 20 },
          { id: 'ai-4', name: 'Combo Chiều Bạn Bè', items: ['🍜', '🍜', '🥟', '🧋'], description: '2 Mỳ Cay + Mandu + Trà Sữa - Chiều uống trà với bạn', price: 155000, originalPrice: 194000, save: 20 },
          { id: 'ai-5', name: 'Combo Chiều Năng Lượng', items: ['🍜', '🍖', '🥤'], description: 'Mỳ Cay Bò Mỹ + Cánh Gà + Coca - Năng lượng cho buổi chiều', price: 112000, originalPrice: 140000, save: 20 }
        ],
        'Xuân-evening': [
          { id: 'ai-1', name: 'Combo Tối Cặp Đôi', items: ['🍜', '🍜', '🍑'], description: '2 Mỳ Cay Hải Sản + Trà Đào - Tối lãng mạn cặp đôi', price: 145000, originalPrice: 181000, save: 20 },
          { id: 'ai-2', name: 'Combo Tối Thân Hữu', items: ['🍜', '🍜', '🥢', '🧋'], description: '2 Mỳ Cay + Tokbokki + Trà Sữa - Bạn bè tụ họp tối nay', price: 168000, originalPrice: 210000, save: 20 },
          { id: 'ai-3', name: 'Combo Tối Gia Đình', items: ['🍜', '🍜', '🍗', '🍑'], description: '2 Mỳ Cay + Gà Rán + Trà Đào - Ăn tối cùng gia đình', price: 185000, originalPrice: 231000, save: 20 },
          { id: 'ai-4', name: 'Combo Tối Party 4', items: ['🍜', '🍜', '🍖', '🧋'], description: '2 Mỳ Cay + Cánh Gà + Trà Sữa - Nhóm 4 người tụ tập', price: 199000, originalPrice: 249000, save: 20 },
          { id: 'ai-5', name: 'Combo Tối Thịnh Soạn', items: ['🍲', '🍖', '🥟', '🍺'], description: 'Mỳ Cay Thập Cẩm + Cánh Gà + Mandu + Bia - Tối sang trọng', price: 155000, originalPrice: 194000, save: 20 }
        ],
        'Xuân-night': [
          { id: 'ai-1', name: 'Combo Đêm Khuya Solo', items: ['🍜', '🍙', '🥤'], description: 'Mỳ Cay Phô Mai + Kimbap + Coca - Đêm khuya một mình cũng ok', price: 88000, originalPrice: 110000, save: 20 },
          { id: 'ai-2', name: 'Combo Đêm Khuya Đôi', items: ['🍜', '🍜', '🧋'], description: '2 Mỳ Cay + Trà Sữa - Đêm khuya hai người thân mật', price: 128000, originalPrice: 160000, save: 20 },
          { id: 'ai-3', name: 'Combo Đêm Khuya Nhóm', items: ['🍜', '🍜', '🥢', '🍺'], description: '2 Mỳ Cay + Tokbokki + Bia - Nhóm bạn ăn xuyên đêm', price: 155000, originalPrice: 194000, save: 20 },
          { id: 'ai-4', name: 'Combo Đêm Học Tập', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay Kim Chi + Kimbap + Trà Nóng - Ôn thi, chuẩn bị khỏe', price: 92000, originalPrice: 115000, save: 20 },
          { id: 'ai-5', name: 'Combo Đêm Gamer', items: ['🍜', '🥟', '🥤'], description: 'Mỳ Cay + Mandu + Soda - Gaming đêm khuya chuẩn chỉ', price: 85000, originalPrice: 106000, save: 20 }
        ],
        'Hè-morning': [
          { id: 'ai-1', name: 'Combo Sáng Giải Nhiệt', items: ['🍜', '🍙', '🍉'], description: 'Mỳ Cay + Kimbap + Nước Ép Dưa Hấu - Sáng mát lạnh', price: 102000, originalPrice: 128000, save: 20 },
          { id: 'ai-2', name: 'Combo Sáng Hè Nhẹ', items: ['🥢', '🍙', '🫐'], description: 'Tokbokki + Kimbap + Soda Việt Quất - Ăn nhẹ sáng hè', price: 80000, originalPrice: 100000, save: 20 },
          { id: 'ai-3', name: 'Combo Sáng Năng Lượng Hè', items: ['🍜', '🍗', '🍉'], description: 'Mỳ Cay Bò Mỹ + Gà Rán + Nước Ép - Sáng khỏe mạnh', price: 118000, originalPrice: 148000, save: 20 },
          { id: 'ai-4', name: 'Combo Sáng Đôi Hè', items: ['🍜', '🍜', '🍙', '🍉'], description: '2 Mỳ Cay + Kimbap + Nước Ép - Sáng với bạn mát lạnh', price: 172000, originalPrice: 215000, save: 20 },
          { id: 'ai-5', name: 'Combo Sáng Gia Đình Hè', items: ['🍜', '🍜', '🍗', '🍉'], description: '2 Mỳ Cay + Gà Rán + Nước Ép - Sáng gia đình giải nhiệt', price: 188000, originalPrice: 235000, save: 20 }
        ],
        'Hè-lunch': [
          { id: 'ai-1', name: 'Combo Trưa Hè Cây Chuối', items: ['🍜', '🥢', '🍉'], description: 'Mỳ Cay Hải Sản + Tokbokki + Nước Ép - Trưa hè tươi mát', price: 112000, originalPrice: 140000, save: 20 },
          { id: 'ai-2', name: 'Combo Trưa Hè Mát Mẻ', items: ['🍜', '🥢', '🫐'], description: 'Mỳ Cay Kim Chi + Tokbokki + Soda Việt Quất - Mát từ ngoài vào', price: 105000, originalPrice: 131000, save: 20 },
          { id: 'ai-3', name: 'Combo Trưa Hè Giảm Cay', items: ['🥢', '🍙', '🍉'], description: 'Tokbokki + Kimbap + Nước Ép Dưa - Trưa nhẹ nhàng, không nặng', price: 82000, originalPrice: 103000, save: 20 },
          { id: 'ai-4', name: 'Combo Trưa Hè Gia Đình', items: ['🍜', '🍜', '🍗', '🍉'], description: '2 Mỳ Cay + Gà Rán + Nước Ép - Ăn trưa gia đình thoải mái', price: 202000, originalPrice: 253000, save: 20 },
          { id: 'ai-5', name: 'Combo Trưa Hè Party', items: ['🍜', '🍜', '🥟', '🍉'], description: '2 Mỳ Cay + Mandu + Nước Ép - Rủ bạn ăn trưa hè', price: 176000, originalPrice: 220000, save: 20 }
        ],
        'Hè-afternoon': [
          { id: 'ai-1', name: 'Combo Chiều Hè Xả Stress', items: ['🍜', '🥢', '🍉'], description: 'Mỳ Cay + Tokbokki + Nước Ép - Chiều giải tỏa, ăn mát', price: 98000, originalPrice: 123000, save: 20 },
          { id: 'ai-2', name: 'Combo Chiều Hè Cực Mát', items: ['🥢', '🍙', '🍉'], description: 'Tokbokki + Kimbap + Nước Ép - Chiều ăn gì cũng mát', price: 80000, originalPrice: 100000, save: 20 },
          { id: 'ai-3', name: 'Combo Chiều Hè Vặt', items: ['🍜', '🌭', '🫐'], description: 'Mỳ Cay Xúc Xích + Tokbokki + Soda - Chiều ăn vặt tại quán', price: 92000, originalPrice: 115000, save: 20 },
          { id: 'ai-4', name: 'Combo Chiều Hè Bạn Bè', items: ['🍜', '🍜', '🥟', '🍉'], description: '2 Mỳ Cay + Mandu + Nước Ép - Chiều với bạn mát lạnh', price: 158000, originalPrice: 198000, save: 20 },
          { id: 'ai-5', name: 'Combo Chiều Hè Thúc Sức', items: ['🍜', '🍖', '🥤'], description: 'Mỳ Cay Bò Mỹ + Cánh Gà + Soda - Thúc sức chiều hè', price: 115000, originalPrice: 144000, save: 20 }
        ],
        'Hè-evening': [
          { id: 'ai-1', name: 'Combo Tối Hè Cặp Đôi', items: ['🍜', '🍜', '🍉'], description: '2 Mỳ Cay + Nước Ép - Tối hè lãng mạn, mát mẻ', price: 148000, originalPrice: 185000, save: 20 },
          { id: 'ai-2', name: 'Combo Tối Hè Thân Hữu', items: ['🍜', '🍜', '🥢', '🍉'], description: '2 Mỳ Cay + Tokbokki + Nước Ép - Bạn bè tụ họp tối hè', price: 172000, originalPrice: 215000, save: 20 },
          { id: 'ai-3', name: 'Combo Tối Hè Gia Đình', items: ['🍜', '🍜', '🍗', '🍉'], description: '2 Mỳ Cay + Gà Rán + Nước Ép - Tối hè cùng gia đình', price: 188000, originalPrice: 235000, save: 20 },
          { id: 'ai-4', name: 'Combo Tối Hè Party', items: ['🍜', '🍜', '🍖', '🍺'], description: '2 Mỳ Cay + Cánh Gà + Bia - Nhóm 4 người tụ tập tối hè', price: 205000, originalPrice: 256000, save: 20 },
          { id: 'ai-5', name: 'Combo Tối Hè Sang Trọng', items: ['🍲', '🍖', '🥟', '🍺'], description: 'Mỳ Cay Thập Cẩm + Cánh Gà + Mandu + Bia - Tối hè thịnh soạn', price: 158000, originalPrice: 198000, save: 20 }
        ],
        'Hè-night': [
          { id: 'ai-1', name: 'Combo Đêm Khuya Hè Solo', items: ['🍜', '🍙', '🍉'], description: 'Mỳ Cay Phô Mai + Kimbap + Nước Ép - Đêm khuya hè mát lạnh', price: 92000, originalPrice: 115000, save: 20 },
          { id: 'ai-2', name: 'Combo Đêm Khuya Hè Đôi', items: ['🍜', '🍜', '🍉'], description: '2 Mỳ Cay + Nước Ép - Đêm khuya hè hai người', price: 131000, originalPrice: 164000, save: 20 },
          { id: 'ai-3', name: 'Combo Đêm Khuya Hè Nhóm', items: ['🍜', '🍜', '🥢', '🍺'], description: '2 Mỳ Cay + Tokbokki + Bia - Nhóm bạn ăn xuyên đêm hè', price: 158000, originalPrice: 198000, save: 20 },
          { id: 'ai-4', name: 'Combo Đêm Học Hè', items: ['🍜', '🍙', '🫐'], description: 'Mỳ Cay Kim Chi + Kimbap + Soda - Học hè, ăn gì cũng mát', price: 95000, originalPrice: 119000, save: 20 },
          { id: 'ai-5', name: 'Combo Đêm Gamer Hè', items: ['🍜', '🥟', '🍉'], description: 'Mỳ Cay + Mandu + Nước Ép - Gaming đêm hè siêu mát', price: 88000, originalPrice: 110000, save: 20 }
        ],
        'Thu-morning': [
          { id: 'ai-1', name: 'Combo Sáng Thu Ấm Áp', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay + Kimbap + Trà Nóng - Sáng thu ấm áp, ấm lạnh', price: 105000, originalPrice: 131000, save: 20 },
          { id: 'ai-2', name: 'Combo Sáng Thu Vừa Phải', items: ['🥢', '🍙', '🧋'], description: 'Tokbokki + Kimbap + Trà Sữa Nóng - Sáng thu ấm lạnh vừa vặn', price: 88000, originalPrice: 110000, save: 20 },
          { id: 'ai-3', name: 'Combo Sáng Thu Năng Lượng', items: ['🍜', '🍗', '☕'], description: 'Mỳ Cay Bò Mỹ + Gà Rán + Trà Nóng - Sáng thu khỏe mạnh', price: 122000, originalPrice: 153000, save: 20 },
          { id: 'ai-4', name: 'Combo Sáng Thu Đôi', items: ['🍜', '🍜', '🍙', '☕'], description: '2 Mỳ Cay + Kimbap + Trà Nóng - Sáng thu ấm ấp cặp đôi', price: 175000, originalPrice: 219000, save: 20 },
          { id: 'ai-5', name: 'Combo Sáng Thu Gia Đình', items: ['🍜', '🍜', '🍗', '☕'], description: '2 Mỳ Cay + Gà Rán + Trà Nóng - Sáng thu cùng gia đình', price: 192000, originalPrice: 240000, save: 20 }
        ],
        'Thu-lunch': [
          { id: 'ai-1', name: 'Combo Trưa Thu Ấm Cơm', items: ['🍜', '🥢', '☕'], description: 'Mỳ Cay Phô Mai + Tokbokki + Trà Nóng - Trưa thu ấm cơm', price: 110000, originalPrice: 138000, save: 20 },
          { id: 'ai-2', name: 'Combo Trưa Thu Cân Bằng', items: ['🍜', '🥢', '🧋'], description: 'Mỳ Cay Kim Chi + Tokbokki + Trà Sữa - Trưa thu cân bằng', price: 108000, originalPrice: 135000, save: 20 },
          { id: 'ai-3', name: 'Combo Trưa Thu Vừa Đủ', items: ['🥢', '🍙', '☕'], description: 'Tokbokki + Kimbap + Trà Nóng - Trưa thu ăn vừa đủ', price: 85000, originalPrice: 106000, save: 20 },
          { id: 'ai-4', name: 'Combo Trưa Thu Gia Đình', items: ['🍜', '🍜', '🍗', '☕'], description: '2 Mỳ Cay + Gà Rán + Trà Nóng - Ăn trưa gia đình thoải mái', price: 205000, originalPrice: 256000, save: 20 },
          { id: 'ai-5', name: 'Combo Trưa Thu Party', items: ['🍜', '🍜', '🥟', '☕'], description: '2 Mỳ Cay + Mandu + Trà Nóng - Trưa rủ bạn ăn', price: 180000, originalPrice: 225000, save: 20 }
        ],
        'Thu-afternoon': [
          { id: 'ai-1', name: 'Combo Chiều Thu Ấm Lạnh', items: ['🍜', '🥢', '☕'], description: 'Mỳ Cay + Tokbokki + Trà Nóng - Chiều thu ấm lạnh tâm hồn', price: 102000, originalPrice: 128000, save: 20 },
          { id: 'ai-2', name: 'Combo Chiều Thu Nhẹ', items: ['🥢', '🍙', '☕'], description: 'Tokbokki + Kimbap + Trà Nóng - Chiều ăn nhẹ, uống ấm', price: 85000, originalPrice: 106000, save: 20 },
          { id: 'ai-3', name: 'Combo Chiều Thu Công Sở', items: ['🍜', '🌭', '🧋'], description: 'Mỳ Cay Xúc Xích + Mandu + Trà Sữa - Chiều công sở thoải mái', price: 95000, originalPrice: 119000, save: 20 },
          { id: 'ai-4', name: 'Combo Chiều Thu Bạn Bè', items: ['🍜', '🍜', '🥟', '☕'], description: '2 Mỳ Cay + Mandu + Trà Nóng - Chiều uống trà với bạn', price: 160000, originalPrice: 200000, save: 20 },
          { id: 'ai-5', name: 'Combo Chiều Thu Năng Lượng', items: ['🍜', '🍖', '☕'], description: 'Mỳ Cay Bò Mỹ + Cánh Gà + Trà Nóng - Năng lượng chiều thu', price: 118000, originalPrice: 148000, save: 20 }
        ],
        'Thu-evening': [
          { id: 'ai-1', name: 'Combo Tối Thu Cặp Đôi', items: ['🍜', '🍜', '☕'], description: '2 Mỳ Cay + Trà Nóng - Tối thu lãng mạn, ấm lạnh', price: 150000, originalPrice: 188000, save: 20 },
          { id: 'ai-2', name: 'Combo Tối Thu Thân Hữu', items: ['🍜', '🍜', '🥢', '☕'], description: '2 Mỳ Cay + Tokbokki + Trà Nóng - Bạn bè tụ họp tối thu', price: 175000, originalPrice: 219000, save: 20 },
          { id: 'ai-3', name: 'Combo Tối Thu Gia Đình', items: ['🍜', '🍜', '🍗', '☕'], description: '2 Mỳ Cay + Gà Rán + Trà Nóng - Tối thu cùng gia đình', price: 192000, originalPrice: 240000, save: 20 },
          { id: 'ai-4', name: 'Combo Tối Thu Party', items: ['🍜', '🍜', '🍖', '🧋'], description: '2 Mỳ Cay + Cánh Gà + Trà Sữa Nóng - Nhóm tụ tập tối thu', price: 210000, originalPrice: 263000, save: 20 },
          { id: 'ai-5', name: 'Combo Tối Thu Sang Trọng', items: ['🍲', '🍖', '🥟', '☕'], description: 'Mỳ Cay Thập Cẩm + Cánh Gà + Mandu + Trà Nóng - Tối thu thịnh soạn', price: 165000, originalPrice: 206000, save: 20 }
        ],
        'Thu-night': [
          { id: 'ai-1', name: 'Combo Đêm Khuya Thu Solo', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay Phô Mai + Kimbap + Trà Nóng - Đêm khuya thu ấm áp', price: 95000, originalPrice: 119000, save: 20 },
          { id: 'ai-2', name: 'Combo Đêm Khuya Thu Đôi', items: ['🍜', '🍜', '☕'], description: '2 Mỳ Cay + Trà Nóng - Đêm khuya thu ấm lạnh hai người', price: 135000, originalPrice: 169000, save: 20 },
          { id: 'ai-3', name: 'Combo Đêm Khuya Thu Nhóm', items: ['🍜', '🍜', '🥢', '🧋'], description: '2 Mỳ Cay + Tokbokki + Trà Nóng - Nhóm ăn xuyên đêm thu', price: 165000, originalPrice: 206000, save: 20 },
          { id: 'ai-4', name: 'Combo Đêm Học Thu', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay Kim Chi + Kimbap + Trà Nóng - Ôn thi, chuẩn bị khỏe', price: 98000, originalPrice: 123000, save: 20 },
          { id: 'ai-5', name: 'Combo Đêm Gamer Thu', items: ['🍜', '🥟', '☕'], description: 'Mỳ Cay + Mandu + Trà Nóng - Gaming đêm thu ấm cơm', price: 92000, originalPrice: 115000, save: 20 }
        ],
        'Đông-morning': [
          { id: 'ai-1', name: 'Combo Sáng Đông Ấm Nóng', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay Cấp 5 + Kimbap + Trà Nóng - Sáng đông cay nóng hổi', price: 110000, originalPrice: 138000, save: 20 },
          { id: 'ai-2', name: 'Combo Sáng Đông Vừa Phải', items: ['🥢', '🍙', '☕'], description: 'Tokbokki + Kimbap + Trà Nóng - Sáng đông ấm vừa vặn', price: 92000, originalPrice: 115000, save: 20 },
          { id: 'ai-3', name: 'Combo Sáng Đông Sức Mạnh', items: ['🍜', '🍗', '☕'], description: 'Mỳ Cay Bò Mỹ + Gà Rán + Trà Nóng - Sáng đông khỏe mạnh', price: 127000, originalPrice: 159000, save: 20 },
          { id: 'ai-4', name: 'Combo Sáng Đông Đôi', items: ['🍜', '🍜', '🍙', '☕'], description: '2 Mỳ Cay + Kimbap + Trà Nóng - Sáng đông ấm ấp cặp đôi', price: 180000, originalPrice: 225000, save: 20 },
          { id: 'ai-5', name: 'Combo Sáng Đông Gia Đình', items: ['🍜', '🍜', '🍗', '☕'], description: '2 Mỳ Cay + Gà Rán + Trà Nóng - Sáng đông cùng gia đình', price: 198000, originalPrice: 248000, save: 20 }
        ],
        'Đông-lunch': [
          { id: 'ai-1', name: 'Combo Trưa Đông Nồng Nàn', items: ['🍜', '🥢', '☕'], description: 'Mỳ Cay Cấp 6 + Tokbokki + Trà Nóng - Trưa đông cay nồng', price: 118000, originalPrice: 148000, save: 20 },
          { id: 'ai-2', name: 'Combo Trưa Đông Bình Thường', items: ['🍜', '🥢', '🧋'], description: 'Mỳ Cay Kim Chi + Tokbokki + Trà Nóng - Trưa đông ấm lạnh', price: 115000, originalPrice: 144000, save: 20 },
          { id: 'ai-3', name: 'Combo Trưa Đông Nhẹ', items: ['🥢', '🍙', '☕'], description: 'Tokbokki + Kimbap + Trà Nóng - Trưa đông ăn nhẹ', price: 90000, originalPrice: 113000, save: 20 },
          { id: 'ai-4', name: 'Combo Trưa Đông Gia Đình', items: ['🍜', '🍜', '🍗', '☕'], description: '2 Mỳ Cay + Gà Rán + Trà Nóng - Trưa đông gia đình', price: 212000, originalPrice: 265000, save: 20 },
          { id: 'ai-5', name: 'Combo Trưa Đông Party', items: ['🍜', '🍜', '🥟', '☕'], description: '2 Mỳ Cay + Mandu + Trà Nóng - Trưa rủ bạn ăn', price: 188000, originalPrice: 235000, save: 20 }
        ],
        'Đông-afternoon': [
          { id: 'ai-1', name: 'Combo Chiều Đông Cay Nóng', items: ['🍜', '🥢', '☕'], description: 'Mỳ Cay Cấp 6 + Tokbokki + Trà Nóng - Chiều đông cay nóng hổi', price: 110000, originalPrice: 138000, save: 20 },
          { id: 'ai-2', name: 'Combo Chiều Đông Nhẹ', items: ['🥢', '🍙', '☕'], description: 'Tokbokki + Kimbap + Trà Nóng - Chiều đông ăn nhẹ', price: 90000, originalPrice: 113000, save: 20 },
          { id: 'ai-3', name: 'Combo Chiều Đông Công Sở', items: ['🍜', '🌭', '☕'], description: 'Mỳ Cay Xúc Xích + Tokbokki + Trà Nóng - Chiều công sở ấm áp', price: 100000, originalPrice: 125000, save: 20 },
          { id: 'ai-4', name: 'Combo Chiều Đông Bạn Bè', items: ['🍜', '🍜', '🥟', '☕'], description: '2 Mỳ Cay + Mandu + Trà Nóng - Chiều uống trà với bạn', price: 168000, originalPrice: 210000, save: 20 },
          { id: 'ai-5', name: 'Combo Chiều Đông Sức Mạnh', items: ['🍜', '🍖', '☕'], description: 'Mỳ Cay Bò Mỹ + Cánh Gà + Trà Nóng - Sức mạnh chiều đông', price: 125000, originalPrice: 157000, save: 20 }
        ],
        'Đông-evening': [
          { id: 'ai-1', name: 'Combo Tối Đông Cặp Đôi', items: ['🍜', '🍜', '☕'], description: '2 Mỳ Cay Cấp 5 + Trà Nóng - Tối đông lãng mạn, ấm nóng', price: 158000, originalPrice: 198000, save: 20 },
          { id: 'ai-2', name: 'Combo Tối Đông Thân Hữu', items: ['🍜', '🍜', '🥢', '☕'], description: '2 Mỳ Cay + Tokbokki + Trà Nóng - Bạn bè tụ họp tối đông', price: 183000, originalPrice: 229000, save: 20 },
          { id: 'ai-3', name: 'Combo Tối Đông Gia Đình', items: ['🍜', '🍜', '🍗', '☕'], description: '2 Mỳ Cay + Gà Rán + Trà Nóng - Tối đông cùng gia đình', price: 200000, originalPrice: 250000, save: 20 },
          { id: 'ai-4', name: 'Combo Tối Đông Party', items: ['🍜', '🍜', '🍖', '🍺'], description: '2 Mỳ Cay Cấp 6 + Cánh Gà + Bia - Nhóm tụ tập tối đông', price: 220000, originalPrice: 275000, save: 20 },
          { id: 'ai-5', name: 'Combo Tối Đông Sang Trọng', items: ['🍲', '🍖', '🥟', '☕'], description: 'Mỳ Cay Thập Cẩm + Cánh Gà + Mandu + Trà Nóng - Tối đông thịnh soạn', price: 175000, originalPrice: 219000, save: 20 }
        ],
        'Đông-night': [
          { id: 'ai-1', name: 'Combo Đêm Khuya Đông Solo', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay Phô Mai Cấp 6 + Kimbap + Trà Nóng - Đêm khuya đông ấm nóng', price: 102000, originalPrice: 128000, save: 20 },
          { id: 'ai-2', name: 'Combo Đêm Khuya Đông Đôi', items: ['🍜', '🍜', '☕'], description: '2 Mỳ Cay Cấp 5 + Trà Nóng - Đêm khuya đông ấm áp hai người', price: 145000, originalPrice: 181000, save: 20 },
          { id: 'ai-3', name: 'Combo Đêm Khuya Đông Nhóm', items: ['🍜', '🍜', '🥢', '🍺'], description: '2 Mỳ Cay + Tokbokki + Bia - Nhóm ăn xuyên đêm đông', price: 175000, originalPrice: 219000, save: 20 },
          { id: 'ai-4', name: 'Combo Đêm Học Đông', items: ['🍜', '🍙', '☕'], description: 'Mỳ Cay Kim Chi + Kimbap + Trà Nóng - Ôn thi, ấm cơm', price: 105000, originalPrice: 131000, save: 20 },
          { id: 'ai-5', name: 'Combo Đêm Gamer Đông', items: ['🍜', '🥟', '☕'], description: 'Mỳ Cay + Mandu + Trà Nóng - Gaming đêm đông chuẩn chỉ', price: 100000, originalPrice: 125000, save: 20 }
        ]
      };

      const key = `${seasonName}-${timeType}`;
      return allSuggestions[key] || allSuggestions['Đông-night'];
    }

    function addComboToCart(comboId) {
      const combos = {
        'ai-1': [1, 8, 14],
        'ai-2': [4, 4, 13, 13],
        'ai-3': [3, 7, 15]
      };
      
      if (combos[comboId]) {
        combos[comboId].forEach(id => addToCart(id));
        closeAIModal();
        showToast('Đã thêm combo vào giỏ hàng! 🎉');
      }
    }

    function closeAIModal() {
      document.getElementById('ai-modal').classList.add('hidden');
    }

    // Chatbot
    const chatResponses = {
      greeting: ['Xin chào! Tôi là trợ lý ảo của Mỳ Cay 7 Cấp Độ. Tôi có thể giúp gì cho bạn?', 'Chào bạn! 🔥 Bạn cần hỗ trợ gì về món ăn không?'],
      menu: ['Menu của chúng tôi có Mỳ Cay (7 cấp độ cay), Tokbokki, Gà Rán, và nhiều đồ uống ngon lắm! Bạn muốn xem món gì?', 'Chúng tôi có các món: Mỳ Cay Hải Sản, Bò Mỹ, Kim Chi, Phô Mai... Đều đang giảm 20%! 🎉'],
      spicy: ['Độ cay được chia làm 7 cấp: Cấp 1-2 nhẹ nhàng, Cấp 3-4 vừa phải, Cấp 5-6 khá cay, Cấp 7 siêu cay! 🌶️', 'Nếu bạn mới thử lần đầu, mình gợi ý cấp 3-4 nhé. Cay vừa phải và rất ngon!'],
      price: ['Giá mỳ cay từ 45,000đ - 75,000đ. Hiện đang giảm 20% tất cả món!', 'Combo sinh viên chỉ 89,000đ đã bao gồm Mỳ + Đồ uống + Món phụ rồi! 🎓'],
      payment: ['Chúng tôi chấp nhận: Tiền mặt, Momo, ZaloPay, và chuyển khoản ngân hàng.', 'Bạn có thể thanh toán sau khi ăn xong hoặc đặt qua app nhé!'],
      time: ['Thời gian phục vụ: 10-15 phút sau khi đặt món.', 'Mỳ cay được nấu tươi nên cần khoảng 10-15 phút nhé!'],
      default: ['Xin lỗi, tôi chưa hiểu rõ ý bạn. Bạn có thể hỏi về menu, độ cay, giá cả, hoặc thanh toán không?', 'Hmm, để tôi chuyển câu hỏi này cho nhân viên nhé. Bạn có thể gọi cho quán qua số 1900-1234!']
    };

    let chatHistory = [];

    function openChat() {
      const modal = document.getElementById('chat-modal');
      const toggle = document.getElementById('chat-toggle');
      if (modal) modal.classList.remove('hidden');
      if (toggle) toggle.classList.add('hidden');
      
      if (chatHistory.length === 0) {
        addChatMessage('bot', chatResponses.greeting[0]);
      }
    }

    function toggleChat() {
      const modal = document.getElementById('chat-modal');
      const toggle = document.getElementById('chat-toggle');
      if (modal) modal.classList.remove('hidden');
      if (toggle) toggle.classList.add('hidden');
      
      if (chatHistory.length === 0) {
        addChatMessage('bot', chatResponses.greeting[0]);
      }
    }

    function closeChat() {
      const modal = document.getElementById('chat-modal');
      const toggle = document.getElementById('chat-toggle');
      if (modal) modal.classList.add('hidden');
      if (toggle) toggle.classList.remove('hidden');
    }

    function addChatMessage(type, message) {
      chatHistory.push({ type, message });
      renderChatMessages();
    }

    function renderChatMessages() {
      const container = document.getElementById('chat-messages');
      container.innerHTML = chatHistory.map(msg => `
        <div class="flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}">
          <div class="chat-bubble ${msg.type === 'user' ? 'spicy-gradient' : 'glass-effect'} px-4 py-2 rounded-2xl ${msg.type === 'user' ? 'rounded-br-md' : 'rounded-bl-md'}">
            ${msg.message}
          </div>
        </div>
      `).join('');
      container.scrollTop = container.scrollHeight;
    }

    function handleChatKeypress(event) {
      if (event.key === 'Enter') {
        sendChatMessage();
      }
    }

    function sendChatMessage() {
      const input = document.getElementById('chat-input');
      const message = input.value.trim();
      if (!message) return;

      addChatMessage('user', message);
      input.value = '';

      // Show typing indicator
      showTypingIndicator();

      // Process response after delay
      setTimeout(() => {
        hideTypingIndicator();
        const response = getAIResponse(message);
        addChatMessage('bot', response);
      }, 1000 + Math.random() * 1000);
    }

    function showTypingIndicator() {
      const container = document.getElementById('chat-messages');
      const indicator = document.createElement('div');
      indicator.id = 'typing-indicator';
      indicator.className = 'flex justify-start';
      indicator.innerHTML = `
        <div class="glass-effect px-4 py-3 rounded-2xl rounded-bl-md">
          <div class="typing-indicator flex gap-1">
            <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
            <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
            <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
          </div>
        </div>
      `;
      container.appendChild(indicator);
      container.scrollTop = container.scrollHeight;
    }

    function hideTypingIndicator() {
      const indicator = document.getElementById('typing-indicator');
      if (indicator) indicator.remove();
    }

    function getAIResponse(message) {
      const msg = message.toLowerCase();
      
      if (msg.includes('xin chào') || msg.includes('hello') || msg.includes('hi') || msg.includes('chào')) {
        return chatResponses.greeting[Math.floor(Math.random() * chatResponses.greeting.length)];
      }
      if (msg.includes('menu') || msg.includes('món') || msg.includes('có gì')) {
        return chatResponses.menu[Math.floor(Math.random() * chatResponses.menu.length)];
      }
      if (msg.includes('cay') || msg.includes('độ cay') || msg.includes('cấp')) {
        return chatResponses.spicy[Math.floor(Math.random() * chatResponses.spicy.length)];
      }
      if (msg.includes('giá') || msg.includes('bao nhiêu') || msg.includes('tiền')) {
        return chatResponses.price[Math.floor(Math.random() * chatResponses.price.length)];
      }
      if (msg.includes('thanh toán') || msg.includes('trả') || msg.includes('payment')) {
        return chatResponses.payment[Math.floor(Math.random() * chatResponses.payment.length)];
      }
      if (msg.includes('thời gian') || msg.includes('bao lâu') || msg.includes('mấy phút')) {
        return chatResponses.time[Math.floor(Math.random() * chatResponses.time.length)];
      }
      
      return chatResponses.default[Math.floor(Math.random() * chatResponses.default.length)];
    }

    // Toast notification
    function showToast(message, type = 'success') {
      const toast = document.createElement('div');
      toast.className = `fixed bottom-4 left-1/2 -translate-x-1/2 ${type === 'error' ? 'bg-red-500' : 'spicy-gradient'} px-6 py-3 rounded-full font-semibold shadow-lg z-50 slide-up`;
      toast.textContent = message;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, 20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
      }, 2500);
    }

    // Data Handler for SDK
    const dataHandler = {
      onDataChanged(data) {
        orders = data;
        currentRecordCount = data.length;
      }
    };

    // Element SDK Handler
    async function onConfigChange(config) {
      const headerName = document.getElementById('header-name');
      const headerWelcome = document.getElementById('header-welcome');
      
      if (headerName) {
        headerName.textContent = config.restaurant_name || defaultConfig.restaurant_name;
      }
      if (headerWelcome) {
        headerWelcome.textContent = config.welcome_text || defaultConfig.welcome_text;
      }
    }

    function mapToCapabilities(config) {
      return {
        recolorables: [
          {
            get: () => config.background_color || defaultConfig.background_color,
            set: (value) => {
              config.background_color = value;
              window.elementSdk.setConfig({ background_color: value });
            }
          },
          {
            get: () => config.surface_color || defaultConfig.surface_color,
            set: (value) => {
              config.surface_color = value;
              window.elementSdk.setConfig({ surface_color: value });
            }
          },
          {
            get: () => config.text_color || defaultConfig.text_color,
            set: (value) => {
              config.text_color = value;
              window.elementSdk.setConfig({ text_color: value });
            }
          },
          {
            get: () => config.primary_color || defaultConfig.primary_color,
            set: (value) => {
              config.primary_color = value;
              window.elementSdk.setConfig({ primary_color: value });
            }
          },
          {
            get: () => config.secondary_color || defaultConfig.secondary_color,
            set: (value) => {
              config.secondary_color = value;
              window.elementSdk.setConfig({ secondary_color: value });
            }
          }
        ],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      };
    }

    function mapToEditPanelValues(config) {
      return new Map([
        ['restaurant_name', config.restaurant_name || defaultConfig.restaurant_name],
        ['welcome_text', config.welcome_text || defaultConfig.welcome_text],
        ['promo_text', config.promo_text || defaultConfig.promo_text]
      ]);
    }

    // Initialize
    async function init() {
      // Initialize Element SDK
      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange,
          mapToCapabilities,
          mapToEditPanelValues
        });
      }

      // Initialize Data SDK
      if (window.dataSdk) {
        const result = await window.dataSdk.init(dataHandler);
        if (result.isError) {
          console.error('Failed to initialize data SDK');
        }
      }

      // Render menu
      renderMenu();
    }

    init();

    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9d7243fa533e0454',t:'MTc3MjY0MTgyNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();

    // Lấy tham số table từ URL
const urlParams = new URLSearchParams(window.location.search);
const tableNumber = urlParams.get("table");

// Nếu có số bàn thì hiển thị
if (tableNumber) {
    const tableDisplay = document.createElement("div");
    tableDisplay.innerText = "Bạn đang ở bàn số: " + tableNumber;
    tableDisplay.style.background = "#ff4d4d";
    tableDisplay.style.color = "white";
    tableDisplay.style.padding = "10px";
    tableDisplay.style.textAlign = "center";
    tableDisplay.style.fontSize = "18px";

    document.body.prepend(tableDisplay);
}