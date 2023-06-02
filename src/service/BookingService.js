

class BookingService{
    constructor() {
        if (!BookingService.instance) {
            BookingService.instance = this;
        }
        return BookingService.instance;
      }
}

const instance = new BookingService();
Object.freeze(instance);

export default instance;