let cost;
let order = prompt('Please indicate the country for delivery!');
order = order.toLowerCase();

switch (order) {
  case 'china':
    cost = 100;
    alert(`Shipping to China will cost 100 credits.`);
    break;

  case 'chile':
    cost = 250;
    alert(`Shipping to Chile will cost 250 credits.`);
    break;

  case 'australia':
    cost = 170;
    alert(`Shipping to Australia will cost 170 credits.`);
    break;

  case 'india':
    cost = 180;
    alert(`Shipping to India will cost 180 credits.`);
    break;

  case 'jamaica':
    cost = 120;
    alert(`Shipping to Jamaica will cost 120 credits.`);
    break;

  default:
    alert(`Delivery is not available in your country.`);
}
