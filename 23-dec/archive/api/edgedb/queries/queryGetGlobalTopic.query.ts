// GENERATED by @edgedb/generate v0.4.1

import type { Executor } from "edgedb"

export type QueryGetGlobalTopicArgs = {
  topicName: string
  hankoId: string
}

export type QueryGetGlobalTopicReturns = {
  learningStatus: string
  linksBookmarkedIds: string[]
  linksInProgressIds: string[]
  linksCompletedIds: string[]
  linksLikedIds: string[]
} | null

export async function queryGetGlobalTopic(
  client: Executor,
  args: QueryGetGlobalTopicArgs
): Promise<QueryGetGlobalTopicReturns> {
  return client.querySingle(
    `\
with topicName := <str>$topicName,
     hankoId := <str>$hankoId
select User {
  learningStatus := "to_learn" if topicName in .topicsToLearn.name
  else "learning" if topicName in .topicsLearning.name
  else "learned" if topicName in .topicsLearned.name
  else "none",
  linksBookmarkedIds := (
    select User.linksBookmarked
    filter .mainTopic.name = topicName
  ).id,
  linksInProgressIds := (
    select User.linksInProgress
    filter .mainTopic.name = topicName
  ).id,
  linksCompletedIds := (
    select User.linksCompleted
    filter .mainTopic.name = topicName
  ).id,
  linksLikedIds := (
    select User.linksLiked
    filter .mainTopic.name = topicName
  ).id
}
filter .hankoId = hankoId`,
    args
  )
}
