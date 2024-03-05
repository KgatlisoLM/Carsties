
using AuctionService.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuctionService.Data;

public class DbInitializer
{
     public static void InitDb(WebApplication app){
       using var scope = app.Services.CreateScope();
       SeedData(scope.ServiceProvider.GetService<AuctionDbContext>());
     }

    private static void SeedData(AuctionDbContext context)
    {
        context.Database.Migrate();

        if(context.Auctions.Any()){
            Console.WriteLine("Already have data - no need to seed");
            return;
        }

        var auctions = new List<Auction>(){
            //auctions

             // 1 VolksWagen GTI
            new Auction
            {
                Id = Guid.Parse("afbee524-5972-4075-8800-7d1f9d7b0a0c"),
                Status = Status.Live,
                ReservePrice = 20000,
                Seller = "john",
                AuctionEnd = DateTime.UtcNow.AddDays(10),
                Item = new Item
                {
                    Make = "VolksWagen",
                    Model = "Golf 7 GTI",
                    Color = "Red",
                    Mileage = 50000,
                    Engine = "2.0 LTR",
                    DrivenWheels = "FWD",
                    Transmission = "Auto",
                    Year = 2017,
                    ImageUrl = "https://cdn.pixabay.com/photo/2019/01/26/21/53/vw-3957054_1280.jpg"
                }
            },
            // 2 Audi Rs6
            new Auction
            {
                Id = Guid.Parse("c8c3ec17-01bf-49db-82aa-1ef80b833a9f"),
                Status = Status.Live,
                ReservePrice = 90000,
                Seller = "jane",
                AuctionEnd = DateTime.UtcNow.AddDays(30),
                Item = new Item
                {
                    Make = "Audi",
                    Model = "RS3 Quattro",
                    Color = "Blue",
                    Mileage = 20035,
                    Engine = "4.0 LTR",
                    DrivenWheels = "AWD",
                    Transmission = "Auto",
                    Year = 2022,
                    ImageUrl = "https://cdn.pixabay.com/photo/2018/04/28/13/28/car-3357296_1280.jpg"
                }
            },
            // 3 Bmw M4
            new Auction
            {
                Id = Guid.Parse("bbab4d5a-8565-48b1-9450-5ac2a5c4a654"),
                Status = Status.Live,
                Seller = "john",
                AuctionEnd = DateTime.UtcNow.AddDays(4),
                Item = new Item
                {
                    Make = "Bmw",
                    Model = "M4 Coupe",
                    Color = "Yellow",
                    Mileage = 45125,
                    Engine = "3.0 LTR",
                    DrivenWheels = "AWD",
                    Transmission = "Auto",
                    Year = 2020,
                    ImageUrl = "https://cdn.pixabay.com/photo/2018/02/21/03/15/bmw-m4-3169357_1280.jpg"
                }
            },
            // 4 Lamborghini huracan
            new Auction
            {
                Id = Guid.Parse("155225c1-4448-4066-9886-6786536e05ea"),
                Status = Status.ReserveNotMet,
                ReservePrice = 80000,
                Seller = "derek",
                AuctionEnd = DateTime.UtcNow.AddDays(8),
                Item = new Item
                {
                    Make = "Lamborghini",
                    Model = "Huracan",
                    Color = "Yellow",
                    Mileage = 25001,
                    Engine = "5.2 LTR",
                    DrivenWheels = "RWD",
                    Transmission = "Auto",
                    Year = 2020,
                    ImageUrl = "https://cdn.pixabay.com/photo/2020/02/03/10/07/lamborghini-4815249_1280.jpg"
                }
            },
            // 5 Mercedes Benz GT
            new Auction
            {
                Id = Guid.Parse("466e4744-4dc5-4987-aae0-b621acfc5e39"),
                Status = Status.Live,
                ReservePrice = 20000,
                Seller = "jane",
                AuctionEnd = DateTime.UtcNow.AddDays(30),
                Item = new Item
                {
                    Make = "Mercedes Benz",
                    Model = "AMG GT",
                    Color = "Silver",
                    Mileage = 90000,
                    Engine = "4.0 LTR",
                    DrivenWheels = "RWD",
                    Transmission = "Auto",
                    Year = 2019,
                    ImageUrl = "https://cdn.pixabay.com/photo/2016/06/20/22/41/mercedes-benz-1470152_1280.jpg"
                }
            },
            // 6 Mercedes Benz G63
            new Auction
            {
                Id = Guid.Parse("dc1e4071-d19d-459b-b848-b5c3cd3d151f"),
                Status = Status.Live,
                ReservePrice = 60000,
                Seller = "john",
                AuctionEnd = DateTime.UtcNow.AddDays(25),
                Item = new Item
                {
                    Make = "Mercedes Benz",
                    Model = "AMG G63",
                    Color = "Lime Green",
                    Mileage = 50000,
                    Engine = "4.0 LTR",
                    DrivenWheels = "AWD",
                    Transmission = "Auto",
                    Year = 2020,
                    ImageUrl = "https://cdn.pixabay.com/photo/2016/03/30/20/20/auto-1291492_1280.jpg"
                }
            },
            // 7 Ferrari F-12
            new Auction
            {
                Id = Guid.Parse("47111973-d176-4feb-848d-0ea22641c31a"),
                Status = Status.Live,
                ReservePrice = 150000,
                Seller = "jane",
                AuctionEnd = DateTime.UtcNow.AddDays(13),
                Item = new Item
                {
                    Make = "Ferrari",
                    Model = "F-12 Berlinetta",
                    Color = "Red",
                    Mileage = 5000,
                    Engine = "6.3 LTR",
                    DrivenWheels = "RWD",
                    Transmission = "Auto",
                    Year = 2022,
                    ImageUrl = "https://cdn.pixabay.com/photo/2018/01/18/18/00/ferrari-3090880_1280.jpg"
                }
            },
            // 8 Challenger SRT
            new Auction
            {
                Id = Guid.Parse("6a5011a1-fe1f-47df-9a32-b5346b289391"),
                Status = Status.Live,
                Seller = "jane",
                AuctionEnd = DateTime.UtcNow.AddDays(19),
                Item = new Item
                {
                    Make = "Dodge",
                    Model = "Challenger SRT Hellcat",
                    Color = "Black",
                    Mileage = 10050,
                    Engine = "6.2 LTR",
                    DrivenWheels = "RWD",
                    Transmission = "Auto",
                    Year = 2021,
                    ImageUrl = "https://cdn.pixabay.com/photo/2020/12/14/02/03/challenger-5829827_1280.jpg"
                }
            },
            // 9 Jeep Wrangler
            new Auction
            {
                Id = Guid.Parse("40490065-dac7-46b6-acc4-df507e0d6570"),
                Status = Status.Live,
                ReservePrice = 20000,
                Seller = "derek",
                AuctionEnd = DateTime.UtcNow.AddDays(20),
                Item = new Item
                {
                    Make = "Jeep",
                    Model = "Wrangler",
                    Color = "Red",
                    Mileage = 25400,
                    Engine = "2.0 LTR",
                    DrivenWheels = "4WD",
                    Transmission = "Auto",
                    Year = 2020,
                    ImageUrl = "https://cdn.pixabay.com/photo/2019/04/16/06/08/jeep-4130962_1280.jpg"
                }
            },
            // 10 Porsche 911 GT2
            new Auction
            {
                Id = Guid.Parse("3659ac24-29dd-407a-81f5-ecfe6f924b9b"),
                Status = Status.Live,
                ReservePrice = 20000,
                Seller = "john",
                AuctionEnd = DateTime.UtcNow.AddDays(38),
                Item = new Item
                {
                    Make = "Porsche",
                    Model = "911 GT2",
                    Color = "Blue",
                    Mileage = 150150,
                    Engine = "3.8 LTR",
                    DrivenWheels = "RWD",
                    Transmission = "Auto",
                    Year = 2021,
                    ImageUrl = "https://cdn.pixabay.com/photo/2020/12/01/18/06/porsche-911-gt2-5795129_1280.jpg"
                }
            }
        };
        
        context.AddRange(auctions);
        context.SaveChanges();
    }
}
