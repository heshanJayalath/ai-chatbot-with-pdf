import { Button } from "@/components/ui/button";
import {
  BrainCogIcon,
  EyeIcon,
  GlobeIcon,
  MonitorSmartphoneIcon,
  ServerCogIcon,
  ZapIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Store your PDF documents",
    description:
      "Keep all your important PDF documents in one secure place and easily access them whenever you need.",
    icons: GlobeIcon,
  },
  {
    name: "Blazing Fast Responses",
    description:
      "Experience lightning-fast responses to your queries, powered by advanced AI technology.",
    icons: ZapIcon,
  },
  {
    name: "Chat Memorisation",
    description:
      "Our AI remembers the context of your previous conversations, providing more accurate and relevant answers over time.",
    icons: BrainCogIcon,
  },
  {
    name: "Interactive PDF Viewer",
    description:
      "Easily view and interact with your PDF documents directly within the chat interface.",
    icons: MonitorSmartphoneIcon,
  },
  {
    name: "Clound Backup",
    description:
      "Your PDF documents are securely backed up in the cloud, ensuring they are always safe and accessible.",
    icons: ServerCogIcon,
  },
  {
    name: "Responsive across devices",
    description:
      "Access your PDF documents and chat with the AI from any device, whether it's a desktop, tablet, or smartphone.",
    icons: EyeIcon,
  },
];

export default function Home() {
  return (
    <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-orange-600">
      <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-wxl sm:text-center">
            <h2 className="text-base font-semibold lending-7 text-orange-600">
              Your Interactive Document Companion
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Transform Your PDFs into interactive conversations
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Introducing{" "}
              <span className="font-bold text-orange-600">Chat with PDF.</span>
              <br />
              <br />
              Upload your document, and our chatbot will answer questions,
              summarize content, and answer all your Questions. Ideal for
              everyone,
              <span className="text-orange-600">Chat with PDF </span> turns
              static documents into{" "}
              <span className="font-bold">dynamic, conversations</span>enhancing
              productivity 10x fold effortlessly.
            </p>
          </div>
          <Button asChild className="mt-10 bg-gray-400">
            <Link href="/dashboard">Get Started</Link>
          </Button>
        </div>
        <div className="relative overflow-hidden pt-14">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Image
              alt="App Screenshot"
              src="https://www.appypie.com/blog/wp-content/uploads/2024/04/2-Set-Up-Your-Knowledge-Base.jpg"
              width={2432}
              height={1442}
              className="mb-[-0%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            />
            <div aria-hidden="true" className="relative">
              <div className="absolute bottom-0 -inset-x-32 bg-gradient-to-t from-white/95 pt-[5%]">

              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6
          gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2
          lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature, index)=>(
              <div className="relative pl-9">
                <dt className="inline font-semibold text-gray-900">
                  <feature.icons
                    aria-hidden="true"
                    className="absolute left-1 top-1 h-5 w-5 text-orange-600"
                  />
                </dt>
                <dd>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </main>
  );
}
