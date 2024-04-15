import setupMock, {successResponseWrap} from "@/http/mock/setup-mock";
import Mock from "mockjs";
import {MockParams} from "@/http/mock/mock";

setupMock({
    setup() {
        Mock.mock(new RegExp('/api/picture-card/list'),'post', (params: MockParams) => {
            return successResponseWrap(
                Mock.mock({
                    'list|1-10': [{
                        'id|+1': 1,
                        device:"@ctitle",
                        uploadDate:"@datetime",
                        location: '@ctitle',
                        cover: '@image(200x200, @color, @color, @ctitle)',
                    }]
                }).list
            )
        })
    }
})