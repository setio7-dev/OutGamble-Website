import { useState } from "react";
import SafeAreaView from "../../ui/SafeAreaView";
import circleMan from "/image/home/statistic/circleMan.png";
import circleWoman from "/image/home/statistic/circleWoman.png";
import circleTeenager from "/image/home/statistic/circleTeenager.png";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { statisticData } from "../../data/homeData";
import AnimationDiv from "../../ui/AnimationDiv";

export default function Statistic() {
    const [selectedYear, setSelectedYear] = useState<string>("2020");
    return (
        <SafeAreaView classNameParent={"h-auto py-16"} classNameChild={"justify-center flex-col gap-14"}>
            <AnimationDiv effect="fade-up" className="flex flex-col w-[900px] items-center gap-4 text-center">
                <h1 className="font-poppins-semibold text-white text-[38px]">Insight Kasus <span className="text-primary">Judi Online</span> Tahunan</h1>
                <p className="text-white font-poppins-regular text-[14px]">Dengan mengumpulkan data tahunan, kita dapat melihat tren peningkatan atau penurunan kasus keterlibatan judi online dari tahun ke tahun. Informasi ini penting untuk membantu pihak berwenang, lembaga pendidikan, dan masyarakat dalam menentukan strategi pencegahan, edukasi digital, serta rehabilitasi bagi korban kecanduan.</p>
            </AnimationDiv>
            <AnimationDiv  effect="fade-up" delay={300} className="flex flex-col w-full px-5 py-6 bg-[#006034] rounded-[12.5px] mt-5">
                <div className="flex lg:flex-row md:flex-row flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-poppins-semibold text-white lg:text-[25px] md:text-[25px] text-[20px]">
                            Data <span className="text-gradient">Statistik</span>{" "}
                            pertahun
                        </h1>
                        <div className="flex flex-row items-center gap-3.5">
                            <h1 className="font-poppins-regular font-semibold text-white lg:text-[13px] md:text-[13px] text-[12px]">
                                Kategori:{" "}
                            </h1>
                            <div className="flex flex-row gap-1.5 items-center">
                                <img
                                    src={circleMan}
                                    className="w-2.5 h-auto object-contain"
                                    alt=""
                                />
                                <p className="font-poppins-regular font-medium text-white text-[11px]">
                                    Pria
                                </p>
                            </div>
                            <div className="flex flex-row gap-1.5 items-center">
                                <img
                                    src={circleWoman}
                                    className="w-2.5 h-auto object-contain"
                                    alt=""
                                />
                                <p className="font-poppins-regular font-medium text-white text-[11px]">
                                    Wanita
                                </p>
                            </div>
                            <div className="flex flex-row gap-1.5 items-center">
                                <img
                                    src={circleTeenager}
                                    className="w-2.5 h-auto object-contain"
                                    alt=""
                                />
                                <p className="font-poppins-regular font-medium text-white text-[11px]">
                                    Remaja
                                </p>
                            </div>
                        </div>
                    </div>
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="font-poppins-medium font-semibold lg:text-[13px] md:text-[13px] text-[12px] text-black bg-white  rounded-[7px] outline-none py-2 px-3 w-20 h-10 lg:mt-0 md:mt-0 mt-4"
                    >
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                    </select>
                </div>
                <div className="w-full h-[350px] mt-5">
                    <ResponsiveContainer>
                        <BarChart data={statisticData[selectedYear]} barCategoryGap={20} margin={{ top: 20, right: 0, left: -20, bottom: 5 }}>
                            <XAxis dataKey="name" tick={{ fill: "#FFFFFF", fontSize: 14, fontFamily: "Poppins", fontWeight: 400, dy: 10 }} axisLine={false} tickLine={false} />
                            <YAxis tick={{ fill: "#FFFFFF", fontSize: 14, fontFamily: "Poppins", fontWeight: 400 }} axisLine={false} tickLine={false} />
                            <Tooltip cursor={false} />
                            <Bar dataKey="remaja" stackId="a" fill="#FFD166" name="Remaja" radius={[0, 0, 7.5, 7.5]} />
                            <Bar dataKey="wanita" stackId="a" fill="#FF4D6D" name="Wanita" radius={[0, 0, 0, 0]} />
                            <Bar dataKey="pria" stackId="a" fill="#00B4D8" name="Pria" radius={[7.5, 7.5, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </AnimationDiv>
        </SafeAreaView>
    )
}
