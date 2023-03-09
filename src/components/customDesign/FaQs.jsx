import Faq from "react-faq-component";
import { Icon } from "@iconify/react";

export default function Faqs() {
  return (
    <div className="my-20">
      <h2 className="text-2xl font-bold text-pink text-center">FAQs</h2>
      <div className="w-5/6 mx-auto mt-12 mb-24">
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
}

const data = {
  rows: [
    {
      title: "How Much Does a Neon Sign Cost?",
      content: `The price for custom LED neon signs start at $112 for a sign with two letters. Our handmade LED neon signs, lamps and wall decor are affordable and we are very competitive on price! In addition to great prices, our experienced team also offers unparalleled customer support, from the design stage through to delivery and aftercare.`,
    },
    {
      title: "Our Design Service",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "Why Buy a Neon Light Sign from Custom Neon®?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "What Neon Light Colors Can I Choose?",
      content: "nothing",
    },
    { title: "How Big Can My Custom-made Neon Be?", content: "that is it" },
    { title: "What are the Backboard Options?", content: "backbone" },
  ],
};
const styles = {
  rowTitleColor: "",
  rowContentPaddingTop: "20px",
};

const config = {
  animate: true,
  arrowIcon: <Icon icon="material-symbols:add" />,
  expandIcon: <Icon icon="material-symbols:add" />,
  collapseIcon: <Icon icon="ic:round-minus" />,
  tabFocus: true,
};
