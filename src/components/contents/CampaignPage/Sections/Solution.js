import { motion } from "framer-motion";

const leadersData = [
  {
    image:
      "https://images.ctfassets.net/xpxpo6b6k2je/2C37uURgWD3wMM9CDgp6EM/4ae705ad75401d7ade6ef1680a4df384/33f5f3307858158da2cd2290b58b227a0f6d344c.png",
    title: "CMOs",
    description: "Experiment with Martech without procurement pain",
  },
  {
    image:
      "https://images.ctfassets.net/xpxpo6b6k2je/5BQTT7FYscJmQc8McNgK0r/06c8744c44a016d833973abd29c26cc6/78641b9fb65f2503c1c3bba4b16faf7c6d010812.png",
    title: "CIOs",
    description: "Explore AI & Adtech without legacy risk",
  },
  {
    image:
      "https://images.ctfassets.net/xpxpo6b6k2je/6OE0aiMSgxiweUhQUfka4A/f0c938af641b9a5cde80052d27f1ef8c/52d25156f832ccdd942a1c5b2b82e390cb7450d1.png",
    title: "CFOs",
    description: "Innovate without overspend",
  },
  {
    image:
      "https://images.ctfassets.net/xpxpo6b6k2je/6welDnT4wkKkKS2eYO3Min/1a2056ab04461988552c08fbcafac1a6/3308c9064c1adb06928800bb97576b8d9635fe06.png",
    title: "CEOs",
    description: "Unlock growth through disruption",
  },
];

export default function Solution() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#1A181F] text-white p-6 tablet:p-12 desktop:p-[80px] 2xl:p-[120px] font-poppins">
      {/* Header */}
      <div className="mb-8 flex flex-col gap-6 tablet:gap-[38px] max-w-full tablet:pl-[40px]">
        <h2 className="font-rethink font-normal text-white text-[30px] tablet:text-[48px] desktop:text-[64px] 2xl:text-[72px] leading-[110%] tracking-[0%] capitalize">
          Made For Leaders Who
          <br />
          Want More Than Buzzwords
        </h2>
        <div className="flex flex-wrap mb-3 gap-3">
          {["10+ Years", "215+ Client", "500+ Project"].map((item, idx) => (
            <span
              key={idx}
              className="font-poppins text-white flex flex-row justify-center w-[110px] tablet:w-[130px] desktop:w-[150px] h-[31px] tablet:h-[35px] rounded-[50px] p-[5px_10px] border border-solid border-[#7300FF] text-sm tablet:text-base"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div
        className="relative rounded-[30px] border border-[#FFFFFF] bg-[#3D27574A] p-6 tablet:p-10 desktop:p-[60px] overflow-hidden bg-cover bg-center bg-no-repeat min-h-[400px] w-full"
        style={{
          backgroundImage:
            "url('https://images.ctfassets.net/xpxpo6b6k2je/1ujXcNGQjS5J42jNX1emdY/742f05bd9ebc715554e20d47cde4cb7c/1333754d05582b66c80a57d2f9eacf70b8fbf5d5__1_.png')",
          backgroundSize: "25%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Responsive Grid */}
        <div className="relative z-10 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 gap-8 tablet:gap-10 desktop:gap-[120px] 2xl:gap-[200px] items-center justify-center">
          {leadersData.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="flex flex-col tablet:flex-col desktop:flex-row items-center desktop:items-start gap-6 text-center desktop:text-left"
            >
              {/* Image box */}
              <div className="bg-[#632EA342] w-[90px] h-[95px] tablet:w-[110px] tablet:h-[120px] desktop:w-[125px] desktop:h-[130px] 2xl:w-[150px] 2xl:h-[155px] rounded-[20px] border border-[#842DFF] flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[70px] h-[80px] tablet:w-[90px] tablet:h-[95px] desktop:w-[100px] desktop:h-[110px] 2xl:w-[120px] 2xl:h-[130px] object-contain"
                />
              </div>

              {/* Text content */}
              <div className="max-w-full tablet:max-w-[380px]">
                <h3 className="text-[22px] tablet:text-[28px] desktop:text-[32px] 2xl:text-[38px] font-poppins font-semibold mb-2 leading-tight">
                  {item.title}{" "}
                  <span className="text-[#842DFF] inline-block">→</span>
                </h3>
                <div className="border-[1.5px] border-white rounded-[12px] backdrop-blur-[40px] bg-[#632EA342] p-4 tablet:p-5 flex items-center justify-center w-full tablet:w-[320px] desktop:w-[379px] min-h-[78px] desktop:h-[78px]">
                  <p className="font-poppins font-normal text-[14px] tablet:text-[16px] desktop:text-[18px] 2xl:text-[20px] leading-snug text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
