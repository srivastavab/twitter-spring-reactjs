package com.gmail.merikbest2015.twitterspringreactjs.service;

import com.gmail.merikbest2015.twitterspringreactjs.model.Image;
import com.gmail.merikbest2015.twitterspringreactjs.model.Tweet;
import com.gmail.merikbest2015.twitterspringreactjs.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface UserService {

    User getUserById(Long userId);

    List<User> getRelevantUsers();

    List<Tweet> getUserTweets(Long userId);

    Image uploadImage(MultipartFile multipartFile);

    User updateUserProfile(User userInfo);

    User follow(Long userId);

    User unfollow(Long userId);
}
