package com.example.demo;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		// .env 파일 로드
				Dotenv dotenv = Dotenv.configure()
						.directory("./")      // 루트 디렉토리에서 .env 검색
						.ignoreIfMissing()    // .env 없으면 무시 (옵션)
						.load();

				// 환경변수 설정 (Spring에서 참조 가능하도록)
				System.setProperty("DB_DRIVER", dotenv.get("DB_DRIVER", ""));
				System.setProperty("DB_URL", dotenv.get("DB_URL", ""));
				System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME", ""));
				System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD", ""));

				SpringApplication.run(DemoApplication.class, args);
				
				

	}

}
