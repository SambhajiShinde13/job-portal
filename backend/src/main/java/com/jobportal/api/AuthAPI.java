package com.jobportal.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.jobportal.exception.JobPortalException;
import com.jobportal.jwt.AuthenticationRequest;
import com.jobportal.jwt.AuthenticationResponse;
import com.jobportal.jwt.JwtHelper;

@RestController
// Allow requests from your frontend domain
@CrossOrigin(origins = "http://careerpoint.duckdns.org", allowedHeaders = "*")
@RequestMapping("/auth")
public class AuthAPI {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtHelper jwtHelper;

	@PostMapping("/login")
	public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest request) throws JobPortalException {
		try {
			// Authenticate user
			authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
			);
		} catch (AuthenticationException e) {
			throw new JobPortalException("Incorrect email or password");
		}

		// Load user details
		final UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());

		// Generate JWT token
		final String jwt = jwtHelper.generateToken(userDetails);

		// Return JWT in response
		return ResponseEntity.ok(new AuthenticationResponse(jwt));
	}
}
