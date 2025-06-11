import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "Products",
  initialState: {
    SlideState: false,
    newWhiteListProduct: "",
    TotalCost: 0,
    total: 0,
    CartCount: 0,
    countCart: 0,
    cartProducts: [],
    activeSlide: -1,
    whiteList: [],
    Copons: [
      {
        copon: "gamal50",
        value: 50,
      },
    ],
    CoponsOnFire: null,
    Products: [
      {
        Id: 0,
        Name: "Rustic Granite Gloves Robot Vacuum ZUSG4061 1600W",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/32.jpg",
        Section: ["Accessories"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 336.51,
        Brand: "Google",
        Slide: true,
        FeaturedAndSlide: true,
        Selling: "Offers & Selling",
        Featured: true,
        TopSelling: true,
        count: 1,
        info: "Distinctio voluptatem ipsam iure voluptas excepturi odit dolor. Quia ducimus ipsa quo dolorem ad ut aut. Consequatur odit omnis voluptates perferendis aut.",
        Like: false,
        Availability: true,
        description: [
          "Quibusdam quia numquam dolores aliquam voluptas quos. Sed inventore non earum. Distinctio odio ut et nobis in animi suscipit consequatur.",
          "Fugiat sit doloribus mollitia temporibus eos ab. Accusamus labore hic repellat eius mollitia dolorem. Harum nam cum minima illo et quae sed.",
          "Et consectetur dolorum molestias quia. Vel qui totam eveniet. Excepturi temporibus dolor ut laborum. Excepturi blanditiis velit eos non qui explicabo. Qui et nihil odio ea quia omnis.",
          "Cupiditate sapiente dolor quis facilis sed. Ut ea aut qui accusantium blanditiis. Veniam nemo repellendus iste et consectetur excepturi itaque. Aspernatur ipsum voluptas voluptate laudantium totam.",
        ],
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 1,
        Name: "Wireless Bluetooth Speaker for Softphones",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/31.jpg",
        Section: ["Accessories"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 551.65,
        Brand: "Game Spot",
        Slide: true,
        FeaturedAndSlide: true,
        Featured: true,
        TopSelling: false,
        count: 1,
        info: "Saepe inventore reiciendis expedita corporis. Ad nesciunt esse autem aut. Saepe iure et quisquam debitis.",
        Like: false,
        Availability: true,
        description: [
          "Corrupti qui reprehenderit et quaerat dignissimos. Voluptatem et cumque tempore quia ex adipisci. Aut incidunt aliquid quo molestias sit nam laborum. Pariatur facere ut perferendis numquam fugit molestiae voluptatibus.",
          "Voluptatem at labore sint quisquam placeat eos. Aut laudantium rem tenetur minima sed distinctio. Voluptatem tempore fugiat libero sint. Veniam explicabo unde est suscipit incidunt nihil cumque fugiat. Libero blanditiis eligendi veniam est deleniti cupiditate.",
          "Assumenda maiores suscipit consectetur et molestias qui culpa. Quod vero delectus veniam et. Perferendis est porro sequi fugiat tenetur sunt dicta voluptatibus. Quos autem veritatis recusandae non corrupti rerum neque sint.",
        ],
        AdditionalInformation: {
          Weight: "130 kg",
          Dimensions: "76 × 61 × 15 cm",
        },
        comments: [],
      },
      {
        Id: 2,
        Name: "Speak 710 Portable Speaker for Music and Calls",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/30.jpg",
        Section: ["Accessories"],
        Rate: 5,
        Availability: true,
        oldPrice: 904.21,
        Sale: true,
        CurrentPrice: 471.48,
        Brand: "Apple",
        Slide: true,
        FeaturedAndSlide: true,
        Featured: true,
        TopSelling: true,
        count: 1,
        info: "Deserunt quia dolores fugit voluptas atque. Nam magni velit aliquid reprehenderit maiores. Sint perspiciatis sint sequi accusamus provident vero.",
        Like: false,
        Availability: true,
        description: [
          "Voluptatem consequuntur odio doloremque minus earum est quis. Sed quasi recusandae voluptatem et. Dicta consequatur et itaque sit sapiente id. Sunt aliquid omnis quisquam.",
          "Quia nulla tempora vel qui distinctio. Eos et est quia dolore accusamus. Veritatis ut quidem accusamus rerum saepe itaque. Voluptatem repellat sit harum ut tenetur.",
          "Non repellendus itaque non pariatur dolores illum. Aliquam iure ratione nobis eligendi mollitia consequatur quisquam. Id asperiores sed voluptatem.",
          "Aut veritatis dolorem nulla qui. Ut maxime et voluptas nam excepturi. Asperiores porro temporibus quasi necessitatibus voluptas molestiae id.",
          "Voluptatem tenetur doloremque dolor et. Velit saepe dolor esse aut ab. Esse consequatur sed sit sunt. Laborum iusto et modi accusamus quod laudantium fuga repellendus.",
        ],
        comments: [],
      },
      {
        Id: 3,
        Name: "Desktop Computer PC, Intel Core i5 3.2GHz",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/29.jpg",
        Section: ["Computer & Gaming"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 985.52,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        Featured: true,
        TopSelling: false,
        count: 1,
        info: "Quasi nulla nihil quis ut quia vero consequatur cupiditate. Odit occaecati quia tempore aut ipsa iusto voluptates. Repellat quae necessitatibus voluptatum sint.",
        Like: false,
        Availability: true,
        description: [
          "Nihil laborum itaque consequatur sed odio dicta voluptas ut. Repellat optio voluptates dolorem dolore voluptatum aut. Labore odit quis esse eveniet distinctio.",
          "Provident aut tempore consequuntur non et. Delectus sint laudantium illum sed.",
        ],
        AdditionalInformation: {
          Weight: "84 kg",
          Dimensions: "141 × 172 × 29 cm",
        },
        comments: [],
      },
      {
        Id: 4,
        Name: "Blender Combo with Single Serve Cups",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/28-300x300.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 788.31,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: true,
        Featured: false,
        count: 1,
        info: "Nisi provident doloribus autem qui. Iusto et eum eum ullam. Optio ut praesentium aspernatur assumenda.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 5,
        Name: "Foot Portable Mini Washing Machine, White",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/22-300x300.jpg",
        Section: ["Washing Machine"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 985.52,
        Brand: "Samsung",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: true,
        Featured: false,
        count: 1,
        info: "Non et est autem. Magni voluptatem non necessitatibus nihil eius. Ullam eveniet corporis non reiciendis similique.",
        Like: false,
        Availability: true,
        description: [
          "Deleniti quod impedit molestiae accusantium. Incidunt voluptas rem suscipit corporis ex et vel. Enim rerum repellendus rerum laudantium aliquam. Molestias officiis laudantium maxime esse non amet enim.",
          "Et qui eius excepturi. Accusamus quibusdam magnam vero commodi sapiente distinctio. Quo consequatur rerum eum autem quo. Molestiae nihil deleniti adipisci deleniti et harum ut.",
          "Provident tenetur aut fugiat soluta recusandae mollitia dicta et. Aut odit accusamus quis est et. Deleniti nulla totam impedit officia architecto fugiat sit.",
          "Quidem occaecati ipsam voluptatem possimus. Facere est nesciunt ipsum atque dolor est ut. Expedita et qui et dicta tempore nulla qui repellat.",
        ],
        comments: [],
      },
      {
        Id: 6,
        Name: "5G Unlocked Cell Phone 6.6″ Prism Dot Black 128GB",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/2-300x300.jpg",
        Section: ["Mobiles", "Tablets"],
        Rate: 5,
        Availability: true,
        oldPrice: 762.04,
        Sale: true,
        CurrentPrice: 201.24,
        Brand: "Samsung",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: true,
        Featured: false,
        count: 1,
        info: "Fugiat id unde fuga inventore. Tempora iure maiores dignissimos amet. Numquam veritatis quidem sed quod laborum similique iste. Nam laboriosam cumque qui asperiores.",
        Like: false,
        Availability: true,
        description: [
          "Magnam blanditiis iusto vitae molestiae commodi voluptate et. Eum placeat in occaecati quia rerum porro. Officiis quas voluptates in est libero.",
          "Non eum qui minima cum. Sapiente explicabo ea quae nemo. Sapiente inventore non et qui.",
          "Rerum ad impedit sint. Unde sunt accusamus est doloribus in accusantium quia. Nostrum est voluptate repellat nemo. Quisquam explicabo cupiditate minima nemo earum.",
        ],
        AdditionalInformation: {
          Weight: "195 kg",
          Dimensions: "151 × 145 × 128 cm",
        },
        comments: [],
      },
      {
        Id: 7,
        Name: "Microwave oven With Display / Silver Handle",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/25-300x300.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 275.14,
        Brand: "Samsung",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: true,
        Featured: false,
        count: 1,
        info: "Aperiam neque aut sit temporibus facilis praesentium. Vero iure ut in minus. Praesentium esse rerum nostrum qui ut minima maiores iusto. Sed voluptas eligendi accusantium voluptatem modi.",
        Like: false,
        Availability: true,
        description: [
          "Vero nulla quaerat harum qui commodi sit. Atque consequatur sequi quo quis at quasi nisi. Et aut dolores iure fuga excepturi et. Nesciunt aperiam perferendis aut eligendi aspernatur sed.",
        ],
        AdditionalInformation: {
          Weight: "183 kg",
          Dimensions: "90 × 61 × 177 cm",
        },
        comments: [],
      },
      {
        Id: 8,
        Name: "4G LTE Unlocked Cell Phone 6.5″ Black 32GB",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/3-300x300.jpg",
        Section: ["Mobiles", "Tablets"],
        Rate: 5,
        Availability: true,
        oldPrice: 52.25,
        Sale: true,
        CurrentPrice: 39.09,
        Brand: "Google",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: true,
        Featured: false,
        count: 1,
        info: "Quia non praesentium excepturi consequuntur molestias cum consequuntur. Nam vero molestiae fuga. Dicta blanditiis sed quis aut ad.",
        Like: false,
        Availability: true,
        description: [
          "Voluptas rerum consequatur voluptas magnam voluptatem. Quam libero corrupti id voluptatem quis harum.",
          "Nihil odit aut pariatur consequatur sed. Et beatae veritatis et beatae qui ipsa. Excepturi sit asperiores recusandae maxime maiores non aut eius. Eaque provident id aut velit.",
          "Autem inventore ex neque nemo officiis dolor. Fugiat atque cumque velit mollitia adipisci. Aperiam et sint ut eaque incidunt consequuntur.",
          "Et ipsa suscipit quo amet recusandae voluptates dicta. Quis dolor incidunt praesentium vitae est suscipit nostrum laborum. Maxime reprehenderit numquam dolore quo molestiae nobis. Aut porro fuga dolor rerum est deleniti.",
          "Harum sit iure eum. Non dolorum vel cupiditate qui est. Consequatur laboriosam omnis dignissimos nisi et.",
        ],
        AdditionalInformation: {
          Weight: "92 kg",
          Dimensions: "44 × 122 × 79 cm",
        },
        comments: [],
      },
      {
        Id: 9,
        Name: "17.3″ HD+ Touchscreen, Intel Core i7-1165G7 Processor",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/7-300x300.jpg",
        Section: ["Computer & Gaming"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 512.72,
        Brand: "Microsoft",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: true,
        Featured: false,
        count: 1,
        info: "Placeat consequuntur dolor dolores est qui fuga. Ut voluptas occaecati eos qui minima ex. Ut porro quam consequuntur quo iusto. Amet sequi eligendi modi cum tempore accusamus.",
        Like: false,
        Availability: true,
        description: [
          "Atque saepe iusto aperiam vero et debitis cumque ullam. Eum incidunt reprehenderit dolor eos veniam temporibus reiciendis numquam. Atque cumque mollitia consequatur.",
          "Et sapiente occaecati voluptatem quia accusamus. Distinctio sapiente est adipisci sit. Eveniet iure ea laboriosam qui est quas. Neque autem qui eligendi vel rem voluptatem.",
          "Id dolores quo quas repellat totam. Nesciunt sapiente necessitatibus optio ipsum impedit et odio animi. Unde qui est ut quia accusantium quae sed. Qui in magnam molestias eius.",
        ],
        comments: [],
      },
      {
        Id: 10,
        Name: "12,000 BTU Air Conditioner with Remote Control",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/16-300x300.jpg",
        Section: ["Air Conditioner"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 336.53,
        Brand: "Microsoft",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Qui voluptate quaerat consequatur amet mollitia et quod qui. At mollitia et ad omnis id sint ut laborum. Quod dolor aut saepe repellat neque. Ut odio et aliquam.",
        Like: false,
        Availability: true,
        description: [
          "Voluptatem eos accusamus saepe modi molestiae laboriosam. Ut nam omnis ipsa hic velit molestiae. Atque omnis ratione vitae nemo. Molestiae repellat iusto vel id nesciunt vel.",
          "Cumque voluptas et quia voluptatibus qui. Suscipit enim reiciendis distinctio placeat quam. Quae saepe aut ea qui necessitatibus voluptatem.",
          "Autem quis quo voluptas voluptatem. Quam porro dicta dolore recusandae adipisci aut. Nam doloremque debitis ex.",
        ],
        AdditionalInformation: {
          Weight: "164 kg",
          Dimensions: "57 × 126 × 179 cm",
        },
        comments: [],
      },
      {
        Id: 11,
        Name: "M515 Thin and Light Laptop 16GB DDR4 RAM",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/10.jpg",
        Section: ["Air Conditioner"],
        Rate: 5,
        Availability: true,
        oldPrice: 29.27,
        Sale: true,
        CurrentPrice: 4.11,
        Brand: "Microsoft",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Eveniet cumque omnis maxime vero et. Nulla ipsum non autem. Dolorem rerum ipsum recusandae dicta quis. Sed et et reprehenderit maiores.",
        Like: false,
        Availability: true,
        description: [
          "Iure id omnis molestiae. Vitae fuga culpa et non. Illum esse exercitationem maiores corporis quia.",
          "Consequatur aut aut officiis reiciendis velit enim fuga repellat. Aut vel dicta expedita velit molestiae labore. Sunt et nemo alias quidem at.",
        ],
        AdditionalInformation: {
          Weight: "123 kg",
          Dimensions: "187 × 116 × 1 cm",
        },
        comments: [],
      },
      {
        Id: 12,
        Name: "Smartwatch 44mm – Silver – Bonus Charging",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/5-150x150.jpg",
        Section: ["Mobiles"],
        Rate: 5,
        Availability: true,
        oldPrice: 744.79,
        Sale: true,
        CurrentPrice: 692.0,
        Brand: "Samsung",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Deserunt aut eaque facere id architecto inventore. Commodi optio voluptates incidunt qui. Ducimus molestiae sequi quam nihil officia iusto et.",
        Like: false,
        description: [
          "Illo animi dicta pariatur quam nostrum. Nemo aut fugit quidem in impedit tempora eos saepe. Aliquam similique dignissimos occaecati officiis.",
        ],
        AdditionalInformation: {
          Weight: "75 kg",
          Dimensions: "14 × 139 × 123 cm",
        },
        comments: [],
      },
      {
        Id: 13,
        Name: "4G LTE Unlocked Cell Phone 6.52″ Midnight Frost 64GB",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/4.jpg",
        Section: ["Mobiles"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 17.9,
        Brand: "Microsoft",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Dolorem optio aut nisi a sed accusamus. Voluptatem expedita exercitationem qui deserunt. Ipsum maiores perspiciatis porro nam nostrum.",
        Like: false,
        description: [
          "Sequi debitis rem expedita deserunt consequatur recusandae. Asperiores saepe exercitationem quas et consectetur voluptas. Odit est rerum quod temporibus expedita incidunt.",
          "Nisi sed ad modi aliquam aut. Ut aliquid autem velit non dicta rem.",
          "Impedit ullam amet laudantium rerum porro. Rerum numquam qui saepe unde dicta placeat. Est sunt facere quam consequatur consequuntur quam.",
        ],
        AdditionalInformation: {
          Weight: "73 kg",
          Dimensions: "21 × 117 × 171 cm",
        },
        comments: [],
      },
      {
        Id: 14,
        Name: "Version Android 11 Helio G25 5150mAh 3GB 64GB",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/6.jpg",
        Section: ["Mobiles"],
        Rate: 5,
        Availability: true,
        oldPrice: 869.85,
        Sale: true,
        CurrentPrice: 233.79,
        Brand: "Apple",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Ut eum quod ut occaecati occaecati. Quia iusto rerum earum et voluptatum reprehenderit et debitis. Dolorem est est ut est facere. Repellat dolores quibusdam in ipsa.",
        Like: false,
        description: [
          "Laboriosam quam laborum possimus cum temporibus hic autem natus. Aut sit iste doloribus dolores. Magnam veniam et labore eos sed nam sed.",
          "Aut itaque tempora dolorum officia molestias nihil. Ad in eum aut soluta. Et nobis ut doloribus est corporis dolor.",
          "Mollitia dolorum et saepe harum sint quasi dolor. Quo aut inventore magnam temporibus ipsam aut. Eum sequi quia velit dolore inventore.",
          "Ut dicta dolor eius rerum impedit est nostrum. Consequatur enim molestias explicabo nihil sit consectetur dolor voluptates. Omnis quia officia quia et possimus. Vel omnis aliquam blanditiis nesciunt est sed.",
          "Quia et sed mollitia numquam. A officiis suscipit non veritatis vel iusto. Quos nobis illum sunt dolor voluptas.",
        ],
        AdditionalInformation: {
          Weight: "107 kg",
          Dimensions: "140 × 50 × 145 cm",
        },
        comments: [],
      },
      {
        Id: 15,
        Name: "Ultra 5G Factory Unlocked Android Cell Phone",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/1.jpg",
        Section: ["Mobiles"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 320.0,
        Brand: "Nokia",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Eius cumque vel et est laborum ea numquam. Qui eligendi rerum ipsa officiis in. At dolores perferendis optio eos voluptatem repudiandae dolor.",
        Like: false,
        description: [
          "Dicta sunt minus molestias. Provident et voluptatem hic. Nobis fuga ut quo sunt tempore commodi numquam. Deleniti quia quos a et accusamus. Aspernatur et asperiores molestiae facilis cumque.",
        ],
        AdditionalInformation: {
          Weight: "74 kg",
          Dimensions: "42 × 190 × 185 cm",
        },
        comments: [],
      },
      {
        Id: 16,
        Name: "Premium Magnetic Levitation Fan, Single Pack",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/24.jpg",
        Section: ["Air Conditioner"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 159.72,
        Brand: "Xiaomi",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Rerum sit amet sit id quasi. Nesciunt et blanditiis a ipsam voluptatibus quia et. Quo dolorem et quo animi enim. Commodi rem est voluptates sapiente voluptate voluptatum dolor.",
        Like: false,
        description: [
          "Sapiente animi quia dignissimos ut. Quia rem amet in architecto pariatur. Corporis animi tempora eius ut dolores ut saepe. Impedit eos nam sunt.",
          "Sunt vero cupiditate totam id possimus. Iste et nisi dolor fugit voluptates. Eaque facilis nam numquam aperiam consequatur autem omnis.",
        ],
        AdditionalInformation: {
          Weight: "74 kg",
          Dimensions: "42 × 190 × 185 cm",
        },
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 17,
        Name: "12,000 BTU Air Conditioner with Remote Control",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/16.jpg",
        Section: ["Air Conditioner"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 336.53,
        Brand: "Xiaomi",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Qui voluptate quaerat consequatur amet mollitia et quod qui. At mollitia et ad omnis id sint ut laborum. Quod dolor aut saepe repellat neque. Ut odio et aliquam.",
        Like: false,
        description: [
          "Sapiente animi quia dignissimos ut. Quia rem amet in architecto pariatur. Corporis animi tempora eius ut dolores ut saepe. Impedit eos nam sunt.",
          "Sunt vero cupiditate totam id possimus. Iste et nisi dolor fugit voluptates. Eaque facilis nam numquam aperiam consequatur autem omnis.",
        ],
        AdditionalInformation: {
          Weight: "74 kg",
          Dimensions: "42 × 190 × 185 cm",
        },
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 18,
        Name: "High Performance Cooling Fan, 4-Pin, 1500 RPM",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/23.jpg",
        Section: ["Air Conditioner"],
        Rate: 5,
        Availability: true,
        oldPrice: 845.31,
        Sale: true,
        CurrentPrice: 261.61,
        Brand: "Xiaomi",
        Slide: false,
        FeaturedAndSlide: false,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Neque hic et et et at maiores vel. Fugiat hic dolor velit magni nemo quas. Corrupti et excepturi qui.",
        Like: false,
        description: [
          "Sapiente animi quia dignissimos ut. Quia rem amet in architecto pariatur. Corporis animi tempora eius ut dolores ut saepe. Impedit eos nam sunt.",
          "Sunt vero cupiditate totam id possimus. Iste et nisi dolor fugit voluptates. Eaque facilis nam numquam aperiam consequatur autem omnis.",
        ],
        AdditionalInformation: {
          Weight: "74 kg",
          Dimensions: "42 × 190 × 185 cm",
        },
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 19,
        Name: "Laptop IdeaPad 3, Intel Core i5, 12 GB Memory",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/8.jpg",
        Section: ["Computer & Gaming"],
        Rate: 5,
        Availability: true,
        oldPrice: 945.3,
        Sale: true,
        CurrentPrice: 320.18,
        Brand: "Game Spot",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Iste et saepe iusto exercitationem et eos sunt. Exercitationem quis cupiditate dolor dolorem asperiores eum. Numquam et qui culpa earum nam. Dolorem a hic tempore et dolorum dolor.",
        Like: false,
        Availability: true,
        description: [
          "Atque saepe iusto aperiam vero et debitis cumque ullam. Eum incidunt reprehenderit dolor eos veniam temporibus reiciendis numquam. Atque cumque mollitia consequatur.",
          "Et sapiente occaecati voluptatem quia accusamus. Distinctio sapiente est adipisci sit. Eveniet iure ea laboriosam qui est quas. Neque autem qui eligendi vel rem voluptatem.",
          "Id dolores quo quas repellat totam. Nesciunt sapiente necessitatibus optio ipsum impedit et odio animi. Unde qui est ut quia accusantium quae sed. Qui in magnam molestias eius.",
        ],
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 20,
        Name: "17.3″ HD+ Touchscreen, AMD Ryzen 5 5500U Processor",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/11.jpg",
        Section: ["Computer & Gaming"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 842.34,
        Brand: "Game Spot",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Nesciunt voluptate aliquid quis tempora voluptatem doloremque. Eum ab ullam a quaerat natus et. Quam et error dolorem ipsa aut. Ipsa aut quod maxime fuga.",
        Like: false,
        Availability: true,
        description: [
          "Eum nostrum sed rerum sed qui magnam. Voluptatibus consequatur sit et cumque debitis. Quas magnam quibusdam cumque voluptas sit aliquid. Vel recusandae consectetur est repudiandae quia nobis.",
        ],
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 21,
        Name: "15.6″ FHD Display, Intel i5-1035G1 CPU, 8 GB RAM",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/9.jpg",
        Section: ["Computer & Gaming"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 720.65,
        Brand: "Game Spot",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Est et vel sed explicabo recusandae et facere veritatis. Sunt iste enim quam quis. Omnis itaque veritatis suscipit sint ea sit nihil.",
        Like: false,
        Availability: true,
        description: [
          "Est consequatur repellat rerum id. Quo sed commodi quaerat ipsam facilis.",
        ],
        comments: [
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Duc Pham",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Kenneth R. Myers",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Mike Addington",
            rate: 5,
            date: "July 21, 2021",
            comment:
              "Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Ervin Arlington",
            rate: 4,
            date: "July 21, 2021",
            comment:
              "The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop",
          },
          {
            photo:
              "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
            name: "Patrick M. Newman",
            rate: 3,
            date: "July 21, 2021",
            comment:
              "My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!",
          },
        ],
      },
      {
        Id: 22,
        Name: "Bottom Freezer Refrigerator Stainless Wide 10.8",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/19.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 297.09,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Consectetur dolore accusamus a voluptatem porro. Facilis ea quae itaque corrupti perspiciatis. Commodi ratione iste in eos harum laborum voluptatem.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 23,
        Name: "Compact Refrigerator Mini Dorm Small Fridge Freezer",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/17.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 652.13,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Aliquam rerum temporibus doloribus et accusantium ut. Voluptates officia ex earum incidunt quis. Saepe in nobis ut id blanditiis dolores hic.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 24,
        Name: "NutriBullet 8-Piece High-Speed Blender/Mixer",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/26.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 542.46,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Porro quam sint libero expedita rerum. Est libero numquam velit ea nostrum harum. Voluptatum aperiam unde culpa mollitia consequuntur quis. Animi odit illum exercitationem culpa et sit.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 25,
        Name: "Energy Star Stainless Steel Compact Freezer",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/18.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: true,
        oldPrice: 796.21,
        Sale: true,
        CurrentPrice: 321.09,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Nihil exercitationem et numquam impedit expedita ipsa. Autem ut molestiae repellat dolor quod labore dolores. Omnis ullam neque culpa qui neque doloremque necessitatibus et. Qui voluptas qui illum.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 26,
        Name: "Vitamix A3500 Brushed Stainless Blender",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/27.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: false,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 320.18,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Quisquam non tempore tenetur itaque quod dolor. Quos qui ipsum voluptatem in asperiores earum voluptatem. Vel molestiae dolores voluptatem modi. Commodi et numquam dolores ut.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 27,
        Name: "Washing Machine Portable Compact Laundry",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/21.jpg",
        Section: ["Home Appliances"],
        Rate: 5,
        Availability: false,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 158.03,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Nihil voluptate autem voluptatem consequatur quia. Eum repellat odit quas. Qui accusamus delectus fugiat ut ipsum maiores dolore. Harum occaecati autem id assumenda non.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 28,
        Name: "43″ Class TU7000 Series Crystal UHD 4K Smart TV",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/14.jpg",
        Section: ["Televisions"],
        Rate: 5,
        Availability: false,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 768.86,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Iste at fuga alias enim. Numquam adipisci autem voluptatem assumenda iure blanditiis. Consectetur sequi aut ut vel facere dicta eum. Repellat ut repellendus esse labore esse.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 29,
        Name: "Series 65″ 4K Smart OLED TV with AI ThinQ",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/13.jpg",
        Section: ["Televisions"],
        Rate: 5,
        Availability: false,
        oldPrice: 517.97,
        Sale: true,
        CurrentPrice: 202.9,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Consequatur voluptatem eos at. Accusamus sed in fuga aut qui.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 30,
        Name: "65″ AU8000 Crystal UHD Smart TV (2020 Model)",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/12.jpg",
        Section: ["Televisions"],
        Rate: 5,
        Availability: false,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 749.45,
        Brand: "LG",
        Slide: true,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Aliquid optio voluptate neque ut vel autem necessitatibus. Dolor dolore quisquam maxime nihil ratione. Reprehenderit at ipsum nisi ad in est quae minus.",
        Like: false,
        Availability: true,
        description: [
          "In ducimus quod sed eum repellendus ea fugiat. Pariatur et illo at iure harum. Molestiae a itaque voluptas explicabo praesentium. Possimus omnis aut architecto et. Repellendus ab ipsa in non doloremque tenetur est doloremque.",
          "Quam in facere soluta consequatur voluptatem beatae asperiores. Qui quia itaque illo eos quibusdam voluptatem et. Est aut deserunt iste. Et ipsum eius ut odit deleniti.",
          "Officia praesentium ipsam perferendis possimus ex culpa voluptatem dolore. Aut id sit et vitae. Quis unde doloremque quisquam facere. In qui eos est voluptatem repudiandae blanditiis consequatur.",
        ],
        AdditionalInformation: {
          Weight: "190 kg",
          Dimensions: "3 × 72 × 109 cm",
        },
        comments: [],
      },
      {
        Id: 31,
        Name: "Laundry Wash Machine Washer/Spinner Pump",
        Img: "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/20.jpg",
        Section: ["Washing Machine"],
        Rate: 5,
        Availability: true,
        oldPrice: false,
        Sale: false,
        CurrentPrice: 355.89,
        Brand: "Samsung",
        Slide: false,
        FeaturedAndSlide: true,
        TopSelling: false,
        Featured: false,
        count: 1,
        info: "Deserunt itaque nobis vel dignissimos fuga vitae. Nesciunt similique dicta sequi. Molestiae nobis deleniti tempora eum veniam quis.",
        Like: false,
        Availability: true,
        description: [
          "Deleniti quod impedit molestiae accusantium. Incidunt voluptas rem suscipit corporis ex et vel. Enim rerum repellendus rerum laudantium aliquam. Molestias officiis laudantium maxime esse non amet enim.",
          "Et qui eius excepturi. Accusamus quibusdam magnam vero commodi sapiente distinctio. Quo consequatur rerum eum autem quo. Molestiae nihil deleniti adipisci deleniti et harum ut.",
          "Provident tenetur aut fugiat soluta recusandae mollitia dicta et. Aut odit accusamus quis est et. Deleniti nulla totam impedit officia architecto fugiat sit.",
          "Quidem occaecati ipsam voluptatem possimus. Facere est nesciunt ipsum atque dolor est ut. Expedita et qui et dicta tempore nulla qui repellat.",
        ],
        comments: [],
      },
    ],
    categores: [
      {
        background:
          "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/h1-img1.jpg",
        type: "LIMITED STOCK",
        Name: "MACBOOK AIR",
        Price: {
          Start: "900.99",
        },
        mode: "light",
      },
      {
        background:
          "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/07/h1-img2.jpg",
        type: "DISCOVER",
        Name: "BEAT PRO X3",
        Price: {
          PriceWas: "259.99",
          current: "199.99",
        },
        shop: "Shop Now",
        mode: "light",
      },
    ],
    showCards: [
      {
        background:
          "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/08/h1-img3.jpg",
        type: "GADGET ZONE",
        Name: "UP TO 30% OFF ONGADGETS",
        mode: "light",
      },
      {
        background:
          "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/08/h1-img4.jpg",
        type: "ONLINE DEALS",
        Name: "ENJOY 25% OFF SPEAKERS",
        mode: "dark",
      },
      {
        background:
          "https://demo2.pavothemes.com/technocy/wp-content/uploads/2021/08/h1-img5.jpg",
        type: "NEW ARRIVAL",
        Name: "REDMI NOTE 10S",
        mode: "light",
      },
    ],
    sectionSearch: {
      Accessories: false,
      "Air Conditioner": false,
      "Computer & Gaming": false,
      "Home Appliances": false,
      Laptops: false,
      Mobiles: false,
      Tablets: false,
      Televisions: false,
      Uncategorized: false,
      "Washing Machine": false,
    },
    search: "",
    SearchData: [],
  },
  reducers: {
    AddTowhiteList: (state, action) => {
      state.newWhiteListProduct = action.payload.Name;
      state.Products.map((product) => {
        return product.Id === action.payload.Id ? (product.Like = true) : "";
      });
      state.Products.map((product) => {
        return product.Id === action.payload.Id ? (product.Like = true) : "";
      });
      state.whiteList = state.Products.filter(
        (product) => product.Like === true
      );
    },
    removeFromWhiteList: (state, action) => {
      state.Products[action.payload.Id].Like = false;
      state.whiteList = state.whiteList.filter(
        (product) => product.Id !== action.payload.Id
      );
      state.whiteList = state.whiteList.filter(
        (val) => val.Id !== action.payload.Id
      );

    },
    addToCart: (state, action) => {
      state.CartCount += 1;

      state.Products[action.payload.product.Id].count = action.payload.count;

      let productAgain = state.cartProducts.filter(
        (product) => product.Id === action.payload.product.Id
      );

      if (productAgain.length === 0) {
        state.cartProducts.push(state.Products[action.payload.product.Id]);
        // console.log(action.payload.product.count)
      } else {
        for (let i = 0; i < state.cartProducts.length; i++) {
          if (state.cartProducts[i].Id === action.payload.product.Id) {
            state.cartProducts[i].count += action.payload.count;
          }
        }
      }
      state.countCart = 0;
      state.TotalCost = 0;
      state.total = 0;
      for (let i = 0; i < state.cartProducts.length; i++) {
        state.countCart += state.cartProducts[i].count;
        state.TotalCost +=
          Math.round(state.cartProducts[i].CurrentPrice) *
          state.cartProducts[i].count;
        state.total +=
          Math.round(state.cartProducts[i].CurrentPrice) *
          state.cartProducts[i].count;
      }
      if (state.CoponsOnFire !== null) {
        state.total -= state.CoponsOnFire.value;
      }
      state.TotalCost = Math.round(state.TotalCost);
      state.total = Math.round(state.TotalCost);
      // state.CartCount = 0
    },
    removeFromCart: (state, action) => {
      state.CartCount = 0;
      state.countCart -= action.payload.count;
      state.TotalCost -=
        Math.round(action.payload.CurrentPrice) * action.payload.count;
      state.total -=
        Math.round(action.payload.CurrentPrice) * action.payload.count;
      state.cartProducts = state.cartProducts.filter(
        (product) => product.Id !== action.payload.Id
      );
    },
    setActiveSlide: (state, action) => {
      state.activeSlide = action.payload;
    },
    closeSlide: (state, action) => {
      state.SlideState = !state.SlideState;
      state.activeSlide = -1;
    },
    addComment: (state, action) => {
      let comment = {
        photo:
          "https://secure.gravatar.com/avatar/8eb1b522f60d11fa897de1dc6351b7e8?s=60&d=mm&r=g",
        name: action.payload.commentDet.name,
        rate: action.payload.commentDet.rate,
        date: action.payload.commentDet.date,
        comment: action.payload.commentDet.comment,
      };
      state.Products[action.payload.product.Id].comments.push(comment);
    },
    addSearch: (state, action) => {
      state.search = action.payload;
      state.SearchData = state.Products.filter(
        (prod) => action.payload === prod.Section[0]
      );
    },
    discount: (state, action) => {
      state.CoponsOnFire = action.payload;
      state.total -= action.payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  AddTowhiteList,
  addSearch,
  removeFromWhiteList,
  addToCart,
  removeFromCart,
  setActiveSlide,
  closeSlide,
  addComment,
  discount,
} = productSlice.actions;

export default productSlice.reducer;
