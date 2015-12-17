package cn.edu.bnu.land.web;

import java.io.IOException;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.edu.bnu.land.common.Encoder;
import cn.edu.bnu.land.service.testUserService;

@Controller
public class testUserController {
	private testUserService testUserService;

	@Autowired
	public testUserController(testUserService testUserService) {
		this.testUserService = testUserService;
	}

	// ----------------------------------用户信息users-------------------------------
	// 查询用户信息
	@RequestMapping(value = "/get_TestUsers")
	// ,method=RequestMethod.POST
	@ResponseBody
	public Map<String, Object> getUsers(
			@RequestParam("searchKeyword") String searchKeyword)
			throws IOException {
		System.out.println("searchKeyword : " + searchKeyword);
		searchKeyword = Encoder.encode(searchKeyword);
		return this.testUserService.getUsersList(searchKeyword);
	}
}
