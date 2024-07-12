package com.org.backendjava.adapter;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.org.backendjava.domain.dto.PlayerDto;

public interface IPlayerGateway {
	PlayerDto registerPlayer(PlayerDto dto);
	Page<PlayerDto> listPlayers(Pageable pageable);
	void deletePlayerById(String id);
	PlayerDto updatePlayer(String id, PlayerDto dto);
}