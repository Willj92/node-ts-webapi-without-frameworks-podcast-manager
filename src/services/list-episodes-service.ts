import { PodcastTransferModel } from "../models/podcast-transfer-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTransferModel> => {
  //define contrato
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };

  //busca os dados
  const data = await repoPodcast();

  //verifico o tipo de resposta
  responseFormat.statusCode =
    data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

  responseFormat.body = data;

  return responseFormat;
};
