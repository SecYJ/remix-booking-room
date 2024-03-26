import Card from "../_app.profile.order/components/Card";
import { MdExpandMore } from "react-icons/md";

const HistoryPage = () => {
    return (
        <div>
            <Card title="歷史訂單">
                <ul className="space-y-6 lg:space-y-10 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-neutral-40 [&>*:not(:last-child)]:pb-6 lg:[&>*:not(:last-child)]:pb-10">
                    <li className="grid gap-6 lg:grid-cols-[7.5rem_1fr]">
                        <img
                            className="h-20 w-30 rounded-lg"
                            src="/assets/mobile/room2-1.png"
                            alt=""
                        />
                        <div className="space-y-4 text-sm font-medium text-neutral-80 lg:text-base">
                            <p>預訂參考編號： HH2302183151222</p>
                            <p className="font-bold lg:text-xl">尊爵雙人房</p>

                            <div>
                                <p className="mb-2">住宿天數： 1 晚</p>
                                <p>住宿人數: 2 位</p>
                            </div>
                            <strong className="block font-bold">
                                NT$10,000
                            </strong>
                        </div>
                    </li>
                    <li>
                        <img
                            className="mb-6 h-20 w-30 rounded-lg"
                            src="/assets/mobile/room2-1.png"
                            alt=""
                        />
                        <div className="space-y-4 text-sm font-medium text-neutral-80">
                            <p>預訂參考編號： HH2302183151222</p>
                            <p className="font-bold">尊爵雙人房</p>

                            <div>
                                <p className="mb-2">住宿天數： 1 晚</p>
                                <p>住宿人數: 2 位</p>
                            </div>
                            <strong className="block font-bold">
                                NT$10,000
                            </strong>
                        </div>
                    </li>
                    <li>
                        <img
                            className="mb-6 h-20 w-30 rounded-lg"
                            src="/assets/mobile/room2-1.png"
                            alt=""
                        />
                        <div className="space-y-4 text-sm font-medium text-neutral-80">
                            <p>預訂參考編號： HH2302183151222</p>
                            <p className="font-bold">尊爵雙人房</p>

                            <div>
                                <p className="mb-2">住宿天數： 1 晚</p>
                                <p>住宿人數: 2 位</p>
                            </div>
                            <strong className="block font-bold">
                                NT$10,000
                            </strong>
                        </div>
                    </li>
                </ul>
                <button
                    type="button"
                    className="mt-6 flex w-full items-center justify-center gap-1 rounded-lg border border-primary-100 py-4 text-primary-100"
                >
                    <span>查看更多</span>
                    <MdExpandMore />
                </button>
            </Card>
        </div>
    );
};

export default HistoryPage;
