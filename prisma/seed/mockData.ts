import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('cc44495b-1456-4107-884f-9aeae3403eec', '1Rebeka.Erdman9@yahoo.com', 'Dave Wilson', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_J0t6Z8x1Q2e7', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('e8b9b6b4-3f6c-45a1-b0fe-d761b7efe3ee', '7Cecile.Stiedemann@hotmail.com', 'Eve Miller', 'https://i.imgur.com/YfJQV5z.png?id=9', 'cus_J0t6Z8x1Q2e3', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('f05e06ca-6359-40ac-9b71-b97d9cb8e88a', '13Johnnie72@yahoo.com', 'Alice Smith', 'https://i.imgur.com/YfJQV5z.png?id=15', 'cus_J0t6Z8x1Q2e7', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('a7b51b1d-a303-4341-8696-e6d5c215dbd5', '19Amie.Russel66@hotmail.com', 'Bob Jones', 'https://i.imgur.com/YfJQV5z.png?id=21', 'cus_J0t6Z8x1Q2e3', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('e2a02388-e92c-49ad-b7bc-71fe16d3b062', '25Itzel_Hagenes28@gmail.com', 'Bob Jones', 'https://i.imgur.com/YfJQV5z.png?id=27', 'cus_J0t6Z8x1Q2e5', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('b2338a64-9713-40de-a02a-a31d0c371c03', '31Sydni42@hotmail.com', 'Carol Davis', 'https://i.imgur.com/YfJQV5z.png?id=33', 'cus_J0t6Z8x1Q2e4', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('40544ae2-81fd-424b-99ca-366782b13e6c', '37Raegan.Baumbach@hotmail.com', 'Dave Wilson', 'https://i.imgur.com/YfJQV5z.png?id=39', 'cus_J0t6Z8x1Q2e6', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('858a6358-43aa-4453-ba1b-ff92b8582746', '43Carmen99@hotmail.com', 'Dave Wilson', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_J0t6Z8x1Q2e6', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "password") VALUES ('e264a32e-9040-462d-96cf-5cc0863b32bc', '49Kraig33@hotmail.com', 'Bob Jones', 'https://i.imgur.com/YfJQV5z.png?id=51', 'cus_J0t6Z8x1Q2e4', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('d8cd8e39-f457-4f3b-baf7-5fb9a6dd8c12', 'a1b2c3d4e5f6g7h8i9j0', '{"benigne":"cras","absque":"ex","curto":"teres"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('fa8d1cc6-2d57-4f86-9634-9f8d5dd8472a', 'm1n2o3p4q5r6s7t8u9v0', '{"spiritus":"voveo","defungo":"surculus","comitatus":"conduco","texo":"defungo"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('0b8d6a05-f632-4d1a-8d9d-d1413c0fdeb4', 'z9y8x7w6v5u4t3s2r1q0', '{"curo":"vulticulus","audax":"considero","assumenda":"copiose","cognomen":"tutamen","capto":"bonus"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('b8aa6560-19cb-404b-a4d2-f0ba45cdd2a8', 'a1b2c3d4e5f6g7h8i9j0', '{"alius":"caste","nostrum":"suspendo","cerno":"curatio","deputo":"crapula","venia":"victoria"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('cf1c27ba-c3e8-4619-99f0-f0b23543e098', 'z9y8x7w6v5u4t3s2r1q0', '{"abutor":"cumque","cogito":"incidunt","alo":"coepi"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('29e85d5d-49f9-47c1-a922-d0c7e4269e22', 'w1x2y3z4a5b6c7d8e9f0', '{"amor":"eum","vicinus":"vociferor","conservo":"adimpleo","nesciunt":"comes"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('e5a09b85-7367-45ca-81da-ba79d0077035', 'w1x2y3z4a5b6c7d8e9f0', '{"voluptatem":"stillicidium","conor":"adversus","vis":"arca","defaeco":"dolore","suppellex":"sublime"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('833b980d-9a24-41cb-ae32-174913f2feb4', 'z9y8x7w6v5u4t3s2r1q0', '{"viridis":"aqua","alo":"vis","et":"canonicus","crux":"denique"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('cf833887-7bf5-43d9-98e7-61f34a5005c0', 'w1x2y3z4a5b6c7d8e9f0', '{"sperno":"circumvenio","cubo":"coadunatio","condico":"cumque","bardus":"admitto"}'::jsonb);
INSERT INTO "RagVector" ("id", "key", "tags") VALUES ('f3482f09-5447-4b03-9d70-64e7caaff961', 'm1n2o3p4q5r6s7t8u9v0', '{"audeo":"terga","supplanto":"deprecator","suffoco":"clementia"}'::jsonb);

INSERT INTO "Membership" ("id", "name", "description") VALUES ('44beab20-dad3-4175-8c9b-1c9192c28164', 'Gamma Wave Membership', 'Ideal for new clients seeking AI solutions.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('3cc5c819-166a-4b32-8773-a0528039c1c3', 'Gamma Wave Membership', 'Special tier for early adopters.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('8eeab7b8-198d-48cc-a312-bc84237120d9', 'Theta Wave Membership', 'Ideal for new clients seeking AI solutions.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('eb95d57c-f9f7-40ae-8417-4ee4ca6c4c31', 'Delta Wave Membership', 'Entrylevel membership with basic features.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('1530a9a6-d9dd-46d9-bef9-4572a65dc096', 'Alpha Wave Membership', 'Special tier for early adopters.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('0e14fa96-4bc9-4c8c-ae9e-81c8eef26928', 'Gamma Wave Membership', 'Exclusive access for Kickstarter backers.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('e9a6d2a9-0a9f-4659-b642-2b9eb09cfbc6', 'Theta Wave Membership', 'Special tier for early adopters.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('e8c5f22a-469d-481e-b5c9-43b6d3930fa6', 'Theta Wave Membership', 'Exclusive access for Kickstarter backers.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('ba470d9e-caf9-4142-aa72-9dea7b2f6281', 'Delta Wave Membership', 'Special tier for early adopters.');
INSERT INTO "Membership" ("id", "name", "description") VALUES ('3f41daaa-e26b-4a84-9605-3f3640b9040c', 'Beta Wave Membership', 'Entrylevel membership with basic features.');

INSERT INTO "Service" ("id", "name", "description") VALUES ('cdc2bc19-87e4-4b7f-b238-94a6f21a6f25', 'Natural Language Processing', 'Implement NLP solutions to understand and generate human language.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('4e5cee0d-66b6-494f-aff2-0f29fdd0889a', 'Data Pipeline Automation', 'Leverage predictive analytics to forecast trends and make informed decisions.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('fed8de61-a181-4787-99aa-58657ff3ff66', 'Natural Language Processing', 'Develop cuttingedge computer vision applications for various industries.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('4e6a940d-a696-47bd-9ce1-049973bbead6', 'Predictive Analytics', 'Develop cuttingedge computer vision applications for various industries.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('e2d90870-3068-43aa-9810-137075aa6503', 'Predictive Analytics', 'Implement NLP solutions to understand and generate human language.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('aebb3b20-9e12-44ef-ad4a-e3a47e6549c8', 'Natural Language Processing', 'Implement NLP solutions to understand and generate human language.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('97d94228-1232-4084-86b1-d6ac8a8839d4', 'AI Model Optimization', 'Develop cuttingedge computer vision applications for various industries.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('8cfc9919-01eb-49db-8080-3cfb19e77243', 'AI Model Optimization', 'Implement NLP solutions to understand and generate human language.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('4cf66e0e-2410-4d6c-b989-ca399fe3523e', 'Computer Vision Solutions', 'Implement NLP solutions to understand and generate human language.');
INSERT INTO "Service" ("id", "name", "description") VALUES ('20ac9901-60c2-4abe-a2df-5ac59104ea4b', 'Computer Vision Solutions', 'Implement NLP solutions to understand and generate human language.');

INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('a6ec75f4-a395-430f-8295-77bb14bddfd0', 'The Future of AI in Healthcare', 'Machine learning algorithms are the backbone of AI systems. This article delves into various types of machine learning algorithms their applications and how they are transforming industries.', 'b2338a64-9713-40de-a02a-a31d0c371c03');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('c00a646d-34c8-4720-a175-bca0b3960e09', 'Understanding Machine Learning Algorithms', 'Deep learning a subset of machine learning is making significant strides in various fields. This article covers the fundamental techniques of deep learning and its applications in areas such as image recognition natural language processing and more.', 'e264a32e-9040-462d-96cf-5cc0863b32bc');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('247a26c9-4f75-44cb-b012-1126a041b482', 'AI Ethics Navigating the Moral Landscape', 'AI is reshaping the business landscape by automating processes enhancing decisionmaking and driving innovation. This article examines the impact of AI on modern business practices and future trends.', 'b2338a64-9713-40de-a02a-a31d0c371c03');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('b6e1ff5a-c92e-480f-8014-c9b934534b35', 'AI Ethics Navigating the Moral Landscape', 'As AI technology advances ethical considerations become increasingly important. This article discusses the moral implications of AI including bias privacy and the potential for misuse.', 'cc44495b-1456-4107-884f-9aeae3403eec');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('d5c98c5e-2a1b-4b13-a6c6-b8dcf7280cf2', 'The Future of AI in Healthcare', 'As AI technology advances ethical considerations become increasingly important. This article discusses the moral implications of AI including bias privacy and the potential for misuse.', '40544ae2-81fd-424b-99ca-366782b13e6c');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('b07d8b73-ac3a-45c6-9059-8ae195fd91c6', 'The Role of AI in Modern Business', 'Deep learning a subset of machine learning is making significant strides in various fields. This article covers the fundamental techniques of deep learning and its applications in areas such as image recognition natural language processing and more.', 'cc44495b-1456-4107-884f-9aeae3403eec');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('8329cdf3-3f9a-43dd-8908-1f7f5679c2f4', 'The Role of AI in Modern Business', 'As AI technology advances ethical considerations become increasingly important. This article discusses the moral implications of AI including bias privacy and the potential for misuse.', 'f05e06ca-6359-40ac-9b71-b97d9cb8e88a');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('d2da3951-b758-4b9d-8d10-03ca81ccdaf8', 'Deep Learning Techniques and Applications', 'As AI technology advances ethical considerations become increasingly important. This article discusses the moral implications of AI including bias privacy and the potential for misuse.', 'e8b9b6b4-3f6c-45a1-b0fe-d761b7efe3ee');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('f6a74f54-a85e-4f5e-85d3-c422481a1c93', 'Understanding Machine Learning Algorithms', 'As AI technology advances ethical considerations become increasingly important. This article discusses the moral implications of AI including bias privacy and the potential for misuse.', 'b2338a64-9713-40de-a02a-a31d0c371c03');
INSERT INTO "Article" ("id", "title", "content", "authorId") VALUES ('a11f7ce4-a2a7-423a-bc19-4dae2654f2cd', 'Deep Learning Techniques and Applications', 'Artificial Intelligence AI is revolutionizing the healthcare industry by improving diagnostics personalizing treatment plans and predicting patient outcomes. This article explores the latest advancements and future possibilities of AI in healthcare.', 'e8b9b6b4-3f6c-45a1-b0fe-d761b7efe3ee');

INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('f8d8db41-a3f6-4752-869a-3753b39b64a8', 'We have implemented basic AI solutions but need advanced analytics.', 'cc44495b-1456-4107-884f-9aeae3403eec');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('0da5df3a-7da2-4cfd-83d6-e79d6eb231c0', 'We have implemented basic AI solutions but need advanced analytics.', 'e2a02388-e92c-49ad-b7bc-71fe16d3b062');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('4027eb4c-a82c-43f1-8541-0f329bdbfa3f', 'Our data infrastructure is robust but we need guidance on AI strategy.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('b81b7315-a219-4528-a890-fb0de45f3bc2', 'Our company has a dedicated team for AI projects but lacks the necessary tools.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('bea30007-a6e7-4092-9d20-fc7b40e76c35', 'We have implemented basic AI solutions but need advanced analytics.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('e9d49df1-c8f5-4d10-9d4b-2d10e213cd8e', 'We have a few AI projects in progress but need help with deployment.', '858a6358-43aa-4453-ba1b-ff92b8582746');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('78f65bb7-e47d-4490-ab66-3773feb0d531', 'We have a few AI projects in progress but need help with deployment.', 'f05e06ca-6359-40ac-9b71-b97d9cb8e88a');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('df26a85f-e847-4e3a-8620-bb11169af2c2', 'Our data infrastructure is robust but we need guidance on AI strategy.', 'e2a02388-e92c-49ad-b7bc-71fe16d3b062');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('0e02099e-8dbf-4b6f-8a1c-bcb50bd61124', 'We have a few AI projects in progress but need help with deployment.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "AiReadinessAssessment" ("id", "responses", "userId") VALUES ('56712260-3305-460c-a331-d467b6270aa3', 'We are exploring AI but have not started any projects yet.', 'cc44495b-1456-4107-884f-9aeae3403eec');

INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('3700cc28-5f96-4bf7-8dd8-7e578ce98bd4', 'I have some questions about the Theta Wave Membership benefits.', '2024-10-04T13:41:00.745Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '858a6358-43aa-4453-ba1b-ff92b8582746');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('f0c8c743-24c1-46b2-9402-c320b466f65f', 'Looking forward to our next meeting to discuss the AI implementation.', '2024-07-02T20:26:07.385Z', 'a7b51b1d-a303-4341-8696-e6d5c215dbd5', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('9c218bbb-5441-4c89-986a-5120b9a1ab7a', 'I have some questions about the Theta Wave Membership benefits.', '2024-01-11T04:02:14.891Z', '858a6358-43aa-4453-ba1b-ff92b8582746', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('49711f4a-3d9d-4f48-93f9-da7846a40484', 'Please review the attached document for our project requirements.', '2024-05-09T15:41:27.263Z', 'e264a32e-9040-462d-96cf-5cc0863b32bc', 'e264a32e-9040-462d-96cf-5cc0863b32bc');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('f63bd60d-bdff-4322-b5c5-871a668aa536', 'Looking forward to our next meeting to discuss the AI implementation.', '2023-10-19T08:51:51.615Z', 'a7b51b1d-a303-4341-8696-e6d5c215dbd5', 'e8b9b6b4-3f6c-45a1-b0fe-d761b7efe3ee');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('b24bc8e3-439d-4c4a-8699-61052ab2bf36', 'When can we expect the first draft of the AI project proposal', '2024-05-16T03:40:11.100Z', 'cc44495b-1456-4107-884f-9aeae3403eec', '40544ae2-81fd-424b-99ca-366782b13e6c');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('8e16ca26-0f2b-40ae-8c8e-91acc528d6da', 'I have some questions about the Theta Wave Membership benefits.', '2024-01-28T13:36:12.946Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'f05e06ca-6359-40ac-9b71-b97d9cb8e88a');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('ab665bca-63ad-4c22-ae2e-240a4dc1b2fd', 'When can we expect the first draft of the AI project proposal', '2025-03-06T21:17:19.047Z', 'b2338a64-9713-40de-a02a-a31d0c371c03', 'e264a32e-9040-462d-96cf-5cc0863b32bc');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('68b70489-75a4-440b-b70e-ce2684b01aea', 'Looking forward to our next meeting to discuss the AI implementation.', '2024-02-21T07:38:29.473Z', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'e2a02388-e92c-49ad-b7bc-71fe16d3b062');
INSERT INTO "Message" ("id", "content", "timestamp", "senderId", "receiverId") VALUES ('861d0ded-ac59-4e3f-87d5-9b3bc512d6e1', 'Looking forward to our next meeting to discuss the AI implementation.', '2024-03-28T21:48:38.730Z', 'f05e06ca-6359-40ac-9b71-b97d9cb8e88a', 'e8b9b6b4-3f6c-45a1-b0fe-d761b7efe3ee');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
