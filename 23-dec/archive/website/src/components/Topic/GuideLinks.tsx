import { For } from "solid-js"
import { useGlobalTopic } from "../../GlobalContext/global-topic"
import GlobalLink from "./GlobalLink"

export default function GuideLinks() {
  const topic = useGlobalTopic()
  return (
    <>
      <div id="GuideLinks" class="h-full col-gap-[8px] w-full">
        <div class="text-[22px] font-bold">{topic.globalTopic.prettyName}</div>
        <For each={topic.globalTopic.links}>
          {(link, id) => {
            return (
              <div
                style={{
                  animation: `DefaultSlide ${id() * 0.2}s ease-in forwards`
                }}
                class="[&>*]:border-none [&>*]:bg-white [&>*]:dark:bg-neutral-900 border-[0.5px] [&>*]:rounded-[6px] dark:border-[#282828]  border-[#69696951]"
              >
                <GlobalLink
                  title={link.title}
                  url={link.url}
                  globalLinkId={link.id}
                  year={link.year}
                  protocol={link.protocol}
                  description={link.description}
                />
              </div>
            )
          }}
        </For>
      </div>
    </>
  )
}
