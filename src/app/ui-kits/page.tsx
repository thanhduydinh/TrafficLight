"use client";

import { CartPlus } from "@/assets/icons/CartPlus";
import { Search } from "@/assets/icons/Search";
import Input from "@/components/ui/Input";
import { cn } from "@/config/utils";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import { useState } from "react";
import Itemcard from "@/components/ui/Itemcard";
import img1 from "../../../public/img/item.png";

export default function UIKits() {
  const [selectedItem, setSelectedItem] = useState<string | number>("");

  const listItems = [
    {
      img: "https://s3-alpha-sig.figma.com/img/7cbc/c3e5/5e6991c70d2d505062ab9fb5ed94c97a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hbb207MjggbB9JuT55zKj7ldDzxmp0XaYTmqCoAiCJmadSh7DLnwseWo~T0zGM~vzKfWHx4aAs8Mc2lYBEzZ2YObUjpufhTcexoIe0GKI06GZGF07axwdd2mZkiR9S93RLaNGpqrbDpQC~VmPJjCMrG5AH6FHNThvPBx6e0YAaK6PMYf0WLPpKqu6HrWGwPV3fb933~JqHLIhIubZKYjz1PPiji1EifeFqVZoPoImyeha8izoUzTev3BhsOCfoTABiNzoD~uklOJuRYDt13HD7jRt8BfGywtCj05iA2mnpWf0zAEwNHekffWHUoelsNJcEk4lquw~QMHFZGH6eVMoA__",
      content:
        "Đèn Ngủ Giá Rẻ Phong Cách Tân Cổ Điển [ SIÊU GIẢM GIÁ ] Đèn Có...",
      currentPrice: "1.045.000đ",
      previousPrice: "2.000.000đ",
      rating: 3.5,
      isFavourite: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/0747/936d/5a1c3c04a17f52194a3d6b9d72a8df79?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mgAJLUWZ0is-c65UJAkHayU1mrET5cRH7OjJ8gBnl~qBRcJkjx2yZ9NEsJBoQaRCGDw9nfoOYxUdrT2eTRwRrUyYPzyUQPOxXPPCCzibAMegaFjfgF92MZYync1fWD-WqIq1bnsvpGpl3IRO2gxF38nHTiaiHg4PsGkvfMSD6qP~DBmrSi759xRH5iY4ZfYP9ssMjZULfD7kc4pPLIgc~pwmn1mh3kk8Mksc~CGRu7gaUX1hACErZNBcUXLKq0D371-lC8vq7oTPU96fBIRFFsVI7IP5MSJO38jwEfxbcw6iU3nb~mlPE5cRcN1lj37xV8mMNYIaQkzwi5hJZakHFg__",
      content:
        "Đèn Ngủ Giá Rẻ Phong Cách Tân Cổ Điển [ SIÊU GIẢM GIÁ ] Đèn Có...",
      currentPrice: "1.045.000đ",
      previousPrice: "2.000.000đ",
      rating: 4.5,
      isFavourite: true,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/de51/d803/6f158fa65aeb31ecd8f0130eb2295714?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pJE0~uemxivjIsmoJCaZvo1cSQZSRcZDs5iFs2rPegG-4bnEItBsN0h4To-xmCdFuUGL4JWraje9UufZ~bOQXHKRFRI1YKdG1IPm-io0lT4MtsqmPUaY96CZq8ifpwcuAklrkFZWET998R1biGZyqzmNVSti7wPHs~EG6m~lLgAJrLlfIuBjkElJ4fZY2Jpd1362YKV5mY9GQsId5kJ-9WAr3oxv27Ufe6gt8xPSYFAC7oJzYnjzHVD-E8GbMbMet7yeaWMNgcf-FS4mpFDJYciW-vnZbWyU7fpgL8eezIqSUF3hKa6CHI0YvKUOE3JELEZuLHh6tHWPt0TyGwfZ3w__",
      content:
        "Đèn Ngủ Giá Rẻ Phong Cách Tân Cổ Điển [ SIÊU GIẢM GIÁ ] Đèn Có...",
      currentPrice: "1.045.000đ",
      previousPrice: "2.000.000đ",
      rating: 2.5,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/356c/868c/bfa368cf98cdaee16151a3cfb20f7dd6?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LaDM370UTtwCksN5cmF2MHslyWpA7flvqW1jcocrTqojCoHCW~c2BBIlfeu~QjMzXaB-y64M5WST684Y0iyaAbsuKN-jo8j5hCtwXERVggYIq-5uLKVkGbvOCR4rphw4RlVNf2tSdgSPJijZW-aHOXadAZDtjwG0Klcqsmn5I2a4JM7DMzebgtKL2ny-0LlJfZ-KpwRPlrTABVvivPsaUH91QotErtJ0CMR2mQRIf~CQCibG~yE3EQZZZD2WLOiCnu1NvJOg3NspL20gL~SXR2PyNio9LdjvIHJEXM1vk-QVordUEsYjBrZNlgjFZi4oWR8YGnxmAR3sSXiSsvUWPA__",
      content:
        "Đèn Ngủ Giá Rẻ Phong Cách Tân Cổ Điển [ SIÊU GIẢM GIÁ ] Đèn Có...",
      currentPrice: "1.045.000đ",
      previousPrice: "2.000.000đ",
      rating: 3.5,
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/1fad/5657/f4dcd35c8e416c81aa0d8c4006d90ad4?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jPyC9TBxT3ByRbMiL2oN2ZHNWu6PB852msqH2VbFAEDkJbVVZmAN8JcDd6IU-KlueZTw3KAs1Er~FmKCZHAl6YUgSUbScmfE08UrCzJrFRFe9~ymuh~AduzKdPKyraqPgpbe4eOZtaNBkC8Uv5b62Hze5Q9mn2TD5iweWLK-3BWQ2yY0f8ZMe9AfrAxu4AnFs0hZH~69tCu4Jyhi4snxIGTVzes~CRGQYE-zqhghTsKtKUqliYHpVNYXqT7TdpnWs32iGIAYu209uCPlbn5RuHORqyL4mcg2DeZmg~fql8cT0dFM7UEViOBR1R8jJW6gwkO7lzNC~KMktZ~1lXY4~Q__",
      content:
        "Đèn Ngủ Giá Rẻ Phong Cách Tân Cổ Điển [ SIÊU GIẢM GIÁ ] Đèn Có...",
      currentPrice: "1.045.000đ",
      previousPrice: "2.000.000đ",
      rating: 5,
      disabled: true,
    },
  ];
  const renderItemCards = (): JSX.Element[] => {
    return listItems.map((item, index) => (
      <Itemcard
        key={index}
        img={item.img}
        content={item.content}
        isFavourite={item.isFavourite}
        currentPrice={item.currentPrice}
        previousPrice={item.previousPrice}
        rating={item.rating}
        disabled={item.disabled}
      />
    ));
  };

  return (
    <main className={cn("mx-10 mt-10 mb-20 space-y-4")}>
      <h1>Buttons</h1>
      <div className="space-x-2">
        <Button
          variant="outlined"
          onClick={() => {
            console.log("baodang");
          }}
        >
          <CartPlus /> Outlined Button
        </Button>
        <Button disabled variant="outlined">
          <CartPlus /> Disabled Outlined Button
        </Button>
        <Button>
          <CartPlus /> Primary Button
        </Button>
        <Button disabled>
          <CartPlus /> Disabled Primary Button
        </Button>
      </div>

      <h1>Inputs</h1>
      <Input
        type="text"
        placeholder="Outlined Input"
        error="Sample error"
        icon={<Search />}
      />
      <Input type="text" placeholder="Outlined Input" icon={<Search />} />
      <Input type="text" disabled placeholder="Disabled Input" />
      <Input
        type="text"
        variant={"standard"}
        placeholder="Standard Input"
        error="Sample error"
        icon={<Search />}
      />
      <Input type="text" variant={"filled"} placeholder="Filled Input" />

      <h1>Dropdown</h1>
      <Dropdown
        size="lg"
        className="w-60"
        defaultValue="HN"
        onChange={(value) => setSelectedItem(value)}
        placeholder="Chọn tỉnh / thành"
        options={[
          { value: "HN", label: "Hà Nội" },
          { value: "HD", label: "Hải Dương" },
          { value: "HP", label: "Hải Phòng" },
          { value: "HB", label: "Hòa Bình" },
          { value: "PT", label: "Phú Thọ" },
          { value: "CB", label: "Cao Bằng" },
          { value: "LS", label: "Lạng Sơn" },
          { value: "DB", label: "Điện Biên" },
          { value: "TH", label: "Thanh Hóa" },
        ]}
      />
      <Dropdown
        size="lg"
        onChange={(value, item) => console.log(value, item)}
        disabled
        placeholder="Chọn tỉnh / thành"
        className="w-60"
        options={[
          { value: "HN", label: "Hà Nội" },
          { value: "HD", label: "Hải Dương" },
          { value: "HP", label: "Hải Phòng" },
          { value: "HB", label: "Hòa Bình" },
          { value: "PT", label: "Phú Thọ" },
          { value: "CB", label: "Cao Bằng" },
        ]}
      />
      <Dropdown
        size="sm"
        placeholder="Sản phẩm"
        options={[
          { value: "qa", label: "Quần áo" },
          { value: "gd", label: "Giày dép" },
        ]}
      />
      <Dropdown
        size="sm"
        disabled
        placeholder="Sản phẩm"
        options={[
          { value: "qa", label: "Quần áo" },
          { value: "gd", label: "Giày dép" },
        ]}
      />

      <div className="flex">{renderItemCards()}</div>
    </main>
  );
}
